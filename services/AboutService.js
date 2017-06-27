import { BaseService } from ".";

class AboutService extends BaseService {
  get(args) {
    this.debug("get");
    return this.api
      .get({
        acceptHeader: "application/json",
        relativeURL: "about"
      })
      .then(json => json[0]);
  }
}

export { AboutService };
