import createDebug from "debug";
import fetch from "node-fetch";
import config from "../../config";

const debug = createDebug("putByURL");

export default function({
  contentTypeHeader,
  acceptHeader,
  relativeURL,
  request,
  authorization
}) {
  debug(`PUT: ${config.API_BASE_URL}/${relativeURL}`);
  debug(`PUT ContentType HEADER: ${contentTypeHeader}`);
  debug(`PUT Accept HEADER: ${acceptHeader}`);

  return fetch(`${config.API_BASE_URL}/${relativeURL}`, {
    method: "PUT",
    headers: {
      "Content-Type": contentTypeHeader,
      Accept: acceptHeader,
      Authorization: authorization
    },
    body: JSON.stringify(request)
  })
    .then(function(res) {
      debug(`PUT RESPONSE CODE: ${res.status}`);

      if (res.status === 401) {
        debug("PUT ERROR: Unauthorized for endpoint -> ", res.url);
        throw Error("Unauthorized.");
      }

      if (res.status === 403) {
        debug("PUT ERROR: Access Denied for endpoint -> ", res.url);
        throw Error("Access Denied.");
      }

      if (res.status === 404) {
        debug("PUT ERROR: Not Found for endpoint -> ", res.url);
        throw Error("Not Found.");
      }

      if (res.status === 415) {
        debug("PUT ERROR: Unsupported Media Type for endpoint -> ", res.url);
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
