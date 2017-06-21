import createDebug from "debug";
import path from "path";
import fs from "fs";
import express from "express";
import cors from "cors";
import graphQLHTTP from "express-graphql";
import { printSchema, printIntrospectionSchema } from "graphql/utilities";
import jwt from "jsonwebtoken";
import config from "./config";
import schema from "./schema";
import createLoaders from "./loaders";

function getAuthorization(header) {
  if (!header) return null;

  let authType = header.split(" ")[0].trim();
  let token = header.split(" ")[1].trim();

  debug("authType: " + authType);
  debug("token: " + token);

  if (authType === "Bearer") {
    let { username, password } = jwt.verify(token, config.JWT_SECRET);
    let authorization =
      "Basic " + new Buffer(username + ":" + password).toString("base64");
    debug("username: " + username);
    return authorization;
  } else {
    let authorization = Buffer.from(token, "base64").toString();
    let username = authorization.split(":")[0];
    debug("username: " + username);
    return header;
  }
}

const debug = createDebug("index");
const app = express();

app.use(cors());
app.options("/graphql", cors());
app.use(express.static(path.join(__dirname, "public")));

app.get("*", function(request, response, next) {
  let authorization = request.get("authorization");

  if (!authorization) {
    response.set("WWW-Authenticate", 'Basic realm="Authorization Required"');
    return response.status(401).send("Authorization Required");
  } else {
    next();
  }
});

app.use(
  "/graphql",
  graphQLHTTP(async (request, response, graphQLParams) => {
    let authorization = getAuthorization(request.get("authorization"));
    return {
      schema: schema,
      graphiql: true,
      context: {
        authorization: authorization,
        loaders: createLoaders(authorization)
      }
    };
  })
);

app.use("/schema", function(request, response) {
  response.set("Content-Type", "text/plain");
  let data = printSchema(schema);

  fs.writeFile("schema.graphql", data, function(error) {
    if (error) {
      console.error("write error:  " + error.message);
    } else {
      debug("Successful wrote schema definition to schema.graphql.");
    }
  });

  response.send(data);
});

app.use("/introspectionSchema", function(request, response) {
  response.set("Content-Type", "text/plain");
  response.send(printIntrospectionSchema(schema));
});

app.get("/", function(request, response) {
  response.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(config.SERVER_PORT);

debug("Listening on port " + config.SERVER_PORT + "...");
console.log(
  "The StudentAPI GraphQL endpoint is now accessible at: " +
    "http://localhost:" +
    config.SERVER_PORT +
    "/graphql"
);
