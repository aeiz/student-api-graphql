import { BaseService } from ".";

class BuildingService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/buildings_get_guid_v4.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v4+json",
      `buildings/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/buildings_get_v4.html
  list(args) {
    this.debug("list");
    let siteId = args.siteId ? `&site.id=${args.siteId}` : "";
    let qs = this.createURLParameters({ ...args, max: args.limit });
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v4+json",
      `buildings` + qs + siteId,
      this.context.authorization
    ).then(json => json);
  }
}

export { BuildingService };
