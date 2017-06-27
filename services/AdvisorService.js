import { BaseService } from ".";

// TODO: finish and check over
class AdvisorService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/erp_apis/student/advising/advising_advisors_id.html
  get(args) {
    this.debug("get:", args.id);
    let qs = this.createURLParameters({ term: args.term });
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.v1+json",
      relativeURL: `advisors/${args.id}` + qs
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/erp_apis/student/advising/advising_advisors.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters({ ...args, max: args.limit });
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.v1+json",
      relativeURL: `advisors` + qs
    });
  }
}

export { AdvisorService };
