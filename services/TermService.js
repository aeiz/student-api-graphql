import { BaseService } from ".";

class TermService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/erp_apis/student/term/term_terms_id.html
  get(args) {
    this.debug("get:", args.id);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.v1+json",
      relativeURL: `terms/${args.id}`
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/subjects_get_v4.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.v1+json",
      relativeURL: `terms` + qs
    });
  }
}

export { TermService };
