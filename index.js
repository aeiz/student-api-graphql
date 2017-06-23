import createDebug from "debug";
import path from "path";
import fs from "fs";
import express from "express";
import cors from "cors";
import { graphql } from "graphql";
import graphQLHTTP from "express-graphql";
import { printSchema, printIntrospectionSchema } from "graphql/utilities";
import { getAuthorization } from "./utils/authorization";
import config from "./config";
import schema from "./schema";
import createLoaders from "./loaders";
import introspectionQuery from "./introspectionQuery";

const debug = createDebug("index");
const app = express();

app.use(cors());
app.options("/graphql", cors());
app.use(express.static(path.join(__dirname, "docs")));

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

app.use("/introspectionQuery", function(request, response) {
  response.set("Content-Type", "text/plain");
  graphql(schema, introspectionQuery).then(data => {
    console.log(data);
    let formattedData = "var introspectionResponse = " + JSON.stringify(data) + ";";
    fs.writeFile("docs/introspectionResponse.js", formattedData, function(error) {
      if (error) {
        console.error("write error:  " + error.message);
      } else {
        debug("Successful wrote schema definition to introspectionResponse.js.");
      }
    });
    response.send(data);
  });
});

app.use("/introspectionSchema", function(request, response) {
  response.set("Content-Type", "text/plain");
  response.send(printIntrospectionSchema(schema));
});

app.get("/", function(request, response) {
  response.sendFile(path.resolve(__dirname, "docs", "voyager.html"));
});

app.listen(config.SERVER_PORT);

debug("Listening on port " + config.SERVER_PORT + "...");
console.log(
  "The StudentAPI GraphQL endpoint is now accessible at: " +
    "http://localhost:" +
    config.SERVER_PORT +
    "/graphql"
);
