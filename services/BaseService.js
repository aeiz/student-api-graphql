import createDebug from "debug";
import DataLoader from "dataloader";
import createURLParameters from "./utils/createURLParameters";
import StudentAPI from "./utils/StudentAPI";

class BaseService {
  constructor(context) {
    this.context = context;
    this.debug = createDebug(this.constructor.name);
    this.createURLParameters = createURLParameters;
    this.api = new StudentAPI(context);
  }

  load(id) {
    this.debug("load:", id);
    return this.context.loaders[this.constructor.name].load(id);
  }

  loadMany(ids) {
    this.debug("loadMany:", ids);
    return this.context.loaders[this.constructor.name].loadMany(ids);
  }

  loader() {
    return new DataLoader(ids =>
      Promise.all(
        ids.map(
          function(id) {
            //this.debug("loader: ", id);
            return this.get({ id });
          }.bind(this)
        )
      )
    );
  }

  get(args) {
    this.debug("GET: This feature is not implemented.");
    throw Error("Get not implemented.");
  }

  list(args) {
    this.debug("LIST: This feature is not implemented.");
    throw Error("List not implemented.");
  }

  create(args) {
    this.debug("CREATE: This feature is not implemented.");
    throw Error("Create not implemented.");
  }

  update(args) {
    this.debug("UPDATE: This feature is not implemented.");
    throw Error("Update not implemented.");
  }

  delete(args) {
    this.debug("DELETE: This feature is not implemented.");
    throw Error("Delete not implemented.");
  }
}

export { BaseService };
