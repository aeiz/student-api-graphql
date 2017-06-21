import createDebug from "debug";

const debug = createDebug("createURLParameters");

export default function(args) {
  let queryString = "";

  if (Object.keys(args).length > 0) {
    queryString += "?";
  }

  for (let key of Object.keys(args)) {
    let value = args[key];
    if (value) {
      if (queryString.length > 1) {
        queryString += "&";
      }

      queryString += key + "=" + value;
    }
  }

  debug(queryString);

  return queryString;
}
