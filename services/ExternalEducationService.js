import { BaseService } from ".";

class ExternalEducationService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/external_education/external_education_get_guid_v7.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v7+json",
      `external-education/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/external_education/external_education_get_v7.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v7+json",
      `external-education` + qs,
      this.context.authorization
    ).then(json => json);
  }
}

export { ExternalEducationService };
