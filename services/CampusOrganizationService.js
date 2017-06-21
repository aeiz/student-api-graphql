import { BaseService } from ".";

class CampusOrganizationService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/campus_organizations/campus_organizations_get_v7.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v7+json",
      `campus-organizations/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/campus_organizations/campus_organizations_list_v7.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v7+json",
      `campus-organizations` + qs,
      this.context.authorization
    ).then(json => json);
  }
}

export { CampusOrganizationService };
