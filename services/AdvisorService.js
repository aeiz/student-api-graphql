import { BaseService } from ".";

// TODO: finish and check over
class AdvisorService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/erp_apis/student/advising/advising_advisors_id.html
  get(args) {
    this.debug("get:", args.id);
    let term = args.term ? `&term=${args.term}` : "";
    return this.fetchResponseByURL(
      "application/vnd.hedtech.v1+json",
      `advisors/${args.id}?` + term,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/erp_apis/student/advising/advising_advisors.html
  list(args) {
    // TODO: filter parameters
    this.debug("list");
    let qs = this.createURLParameters({ ...args, max: args.limit });
    return this.fetchResponseByURL(
      "application/vnd.hedtech.v1+json",
      `advisors` + qs,
      this.context.authorization
    ).then(json => json);
  }
}

export { AdvisorService };
