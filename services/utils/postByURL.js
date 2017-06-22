import createDebug from "debug";
import fetch from "node-fetch";
import config from "../../config";

const debug = createDebug("postByURL");

export default function({
  contentTypeHeader,
  acceptHeader,
  relativeURL,
  request,
  authorization
}) {
  debug(`POST: ${config.API_BASE_URL}/${relativeURL}`);
  debug(`POST ContentType HEADER: ${contentTypeHeader}`);
  debug(`POST Accept HEADER: ${acceptHeader}`);

  return fetch(`${config.API_BASE_URL}/${relativeURL}`, {
    method: "POST",
    headers: {
      "Content-Type": contentTypeHeader,
      Accept: acceptHeader,
      Authorization: authorization
    },
    body: JSON.stringify(request)
  })
    .then(function(res) {
      debug(`POST RESPONSE CODE: ${res.status}`);

      if (res.status === 401) {
        debug("POST ERROR: Unauthorized for endpoint -> ", res.url);
        throw Error("Unauthorized.");
      }

      if (res.status === 403) {
        debug("POST ERROR: Access Denied for endpoint -> ", res.url);
        throw Error("Access Denied.");
      }

      if (res.status === 404) {
        debug("POST ERROR: Not Found for endpoint -> ", res.url);
        throw Error("Not Found.");
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
