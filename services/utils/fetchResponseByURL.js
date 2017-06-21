import createDebug from "debug";
import fetch from "node-fetch";
import config from "../../config";

const debug = createDebug("fetchResponseByURL");

export default function(acceptHeader, relativeURL, authorization) {
  debug(`FETCH: ${config.API_BASE_URL}/${relativeURL}`);
  debug(`FETCH ACCEPT HEADER: ${acceptHeader}`);
  return fetch(`${config.API_BASE_URL}/${relativeURL}`, {
    method: "GET",
    headers: {
      Accept: acceptHeader,
      Authorization: authorization
    }
  })
    .then(function(res) {
      debug(`FETCH RESPONSE CODE: ${res.status}`);

      /*
      if(res.status === 400) {
        debug("FETCH ERROR: Bad Request for endpoint -> ", res.url);
        throw Error("Bad Request.");
      }
      */

      if (res.status === 401) {
        debug("FETCH ERROR: Unauthorized for endpoint -> ", res.url);
        throw Error("Unauthorized.");
      }

      if (res.status === 403) {
        debug("FETCH ERROR: Access Denied for endpoint -> ", res.url);
        throw Error("Access Denied.");
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
