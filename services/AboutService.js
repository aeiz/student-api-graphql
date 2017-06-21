import { BaseService } from ".";

class AboutService extends BaseService {
  get(args) {
    this.debug("get");
    return this.fetchResponseByURL(
      "application/json",
      "about",
      this.context.authorization
    ).then(json => json[0]);
  }
}

export { AboutService };
