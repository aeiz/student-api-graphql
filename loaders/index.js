import createDebug from "debug";
import * as Services from "../services";
const debug = createDebug("loaders");

export default function createLoaders(authorization) {
  let loaders = Array();

  Object.keys(Services).forEach(function(key) {
    if (key !== "BaseService" && typeof Services[key] === "function") {
      debug("Registering Loader:", key);
      loaders[key] = new Services[key]({
        authorization: authorization
      }).loader();
    }
  });

  return loaders;
}
