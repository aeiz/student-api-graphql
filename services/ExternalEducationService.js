import { BaseService } from ".";

class ExternalEducationService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/external_education/external_education_get_guid_v7.html
  get(args) {
    this.debug("get:", args.id);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.integration.v7+json",
      relativeURL: `external-education/${args.id}`
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/external_education/external_education_get_v7.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.integration.v7+json",
      relativeURL: `external-education` + qs
    });
  }
}

export { ExternalEducationService };
