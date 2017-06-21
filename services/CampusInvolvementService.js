import { BaseService } from ".";

class CampusInvolvementService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/campus_involvements/campus_involvements_get_v7.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v7+json",
      `campus-involvements/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/campus_involvements/campus_involvements_list_v7.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v7+json",
      `campus-involvements` + qs,
      this.context.authorization
    ).then(json => json);
  }
}

export { CampusInvolvementService };
