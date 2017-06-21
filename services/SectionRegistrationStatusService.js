import { BaseService } from ".";

class SectionRegistrationStatusService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/section_registration_statuses_get_v8.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v8+json",
      `section-registration-statuses/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/section_registration_statuses_list_v8.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v8+json",
      `section-registration-statuses` + qs,
      this.context.authorization
    ).then(json => json);
  }
}

export { SectionRegistrationStatusService };
