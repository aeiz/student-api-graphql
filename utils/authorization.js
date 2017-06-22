import createDebug from "debug";
import path from "path";
import jwt from "jsonwebtoken";
import { decrypt } from "./crypto";
import config from "../config";

const debug = createDebug("authorization");

function getAuthorization(header) {
  if (!header) return null;

  let authType = header.split(" ")[0].trim();
  let token = header.split(" ")[1].trim();

  debug("authType: " + authType);
  debug("token: " + token);

  if (authType === "Bearer") {
    let { username, password } = jwt.verify(token, config.JWT_SECRET);
    let authorization =
      "Basic " +
      new Buffer(username + ":" + decrypt(password)).toString("base64");
    debug("username: " + username);
    return authorization;
  } else {
    let authorization = Buffer.from(token, "base64").toString();
    let username = authorization.split(":")[0];
    debug("username: " + username);
    return header;
  }
}

export { getAuthorization };
