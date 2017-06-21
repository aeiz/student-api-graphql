import { BaseService } from ".";

class TermService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/erp_apis/student/term/term_terms_id.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.v1+json",
      `terms/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/subjects_get_v4.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.v1+json",
      `terms` + qs,
      this.context.authorization
    ).then(json => json);
  }
}

export { TermService };
