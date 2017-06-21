import { BaseService } from ".";

class GeographicAreaService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/geographic_areas/geographic-areas_get_id_v4.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v4+json",
      `geographic-areas/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/geographic_areas/geographic-areas_get_v4.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters({ ...args, max: args.limit });
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v4+json",
      `geographic-areas` + qs,
      this.context.authorization
    ).then(json => json);
  }
}

export { GeographicAreaService };
