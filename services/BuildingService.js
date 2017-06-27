import { BaseService } from ".";

class BuildingService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/buildings_get_guid_v4.html
  get(args) {
    this.debug("get:", args.id);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `buildings/${args.id}`
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/buildings_get_v4.html
  list(args) {
    this.debug("list");
    let siteId = args.siteId ? `&site.id=${args.siteId}` : "";
    let qs = this.createURLParameters({ ...args, max: args.limit });
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `buildings` + qs + siteId
    });
  }
}

export { BuildingService };
