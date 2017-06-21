import * as React from "react";
import * as ReactDOM from "react-dom";
import { Voyager } from "graphql-voyager";
import fetch from "isomorphic-fetch";
import config from "../config";

function introspectionProvider(query) {
  let graphqlProvider =
    config.SERVER_PROTOCOL +
    "://" +
    config.SERVER_ADDRESS +
    ":" +
    config.SERVER_PORT +
    "/graphql";

  return fetch(graphqlProvider, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query: query })
  }).then(response => response.json());
}

ReactDOM.render(
  <Voyager introspection={introspectionProvider} />,
  document.getElementById("voyager")
);
