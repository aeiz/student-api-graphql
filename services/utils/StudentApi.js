import createDebug from "debug";
import fetch from "node-fetch";
import config from "../../config";

const debug = createDebug("StudentAPI");

export default class StudentAPI {
  constructor(context) {
    this.context = context;
  }

  get(args) {
    return this.fetch({ ...args, method: "GET" });
  }

  list(args) {
    return this.fetch({ ...args, method: "GET" });
  }

  create(args) {
    return this.fetch({ ...args, method: "POST" });
  }

  update(args) {
    return this.fetch({ ...args, method: "PUT" });
  }

  delete(args) {
    return this.fetch({ ...args, method: "DELETE" });
  }

  fetch({ relativeURL, method, contentTypeHeader, acceptHeader, request }) {
    debug(`${method} ${config.API_BASE_URL}/${relativeURL}`);
    debug(`${method} ContentType Header: ${contentTypeHeader}`);
    debug(`${method} Accept Header: ${acceptHeader}`);

    let args = {
      method: method,
      headers: {
        Accept: acceptHeader,
        Authorization: this.context.authorization
      }
    };

    if (["POST", "PUT"].includes(method) && request) {
      args["Content-Type"] = contentTypeHeader;
      args["body"] = JSON.stringify(request);
    }

    return fetch(`${config.API_BASE_URL}/${relativeURL}`, args)
      .then(function(res) {
        debug(`${method} Response Code: ${res.status}`);

        if (res.status === 401) {
          debug(`${method} ERROR: Unauthorized for endpoint -> ${res.url}`);
          throw Error("Unauthorized.");
        }

        if (res.status === 403) {
          debug(`${method} ERROR: Access Denied for endpoint -> ${res.url}`);
          throw Error("Access Denied.");
        }

        if (res.status === 404) {
          debug(`${method} ERROR: Not Found for endpoint -> ${res.url}`);
          throw Error("Not Found.");
        }

        if (res.status === 415) {
          debug(
            `${method} ERROR: Unsupported Media Type for endpoint -> ${res.url}`
          );
          throw Error("Unsupported Media Type.");
        }

        return res;
      })
      .then(res => {
        return res.json();
      })
      .then(json => {
        if (json.errors) {
          debug(json.errors);
          if (json.errors[0].code) {
            throw Error(
              "[" +
                json.errors[0].code +
                "] " +
                json.errors[0].message +
                " (" +
                json.errors[0].description +
                ")."
            );
          } else if (json.errors[0].type) {
            throw Error(
              "[" + json.errors[0].type + "] " + json.errors[0].errorMessage
            );
          }
        }
        return json;
      });
  }
}
