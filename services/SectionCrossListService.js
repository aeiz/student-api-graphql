import { BaseService } from ".";

class SectionCrossListService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/section_crosslists/section_crosslists_get_id_v4.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v5+json",
      `section-crosslists/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/section_crosslists/section_crosslists_get_v4.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters({ ...args, max: args.limit });
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v5+json",
      `section-crosslists` + qs,
      this.context.authorization
    ).then(json => json);
  }
}

export { SectionCrossListService };
