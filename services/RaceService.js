import { BaseService } from ".";

class RaceService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/races_get_id_V6.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v6+json",
      `races/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/races_get_V6.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v6+json",
      `races` + qs,
      this.context.authorization
    ).then(json => json);
  }

  create(args) {
    // TODO: Implement
  }

  update(args) {
    // TODO: Implement
  }
}

export { RaceService };
