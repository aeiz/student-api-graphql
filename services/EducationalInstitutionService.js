import { BaseService } from ".";

class EducationalInstitutionService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/educational_institutions/educational_institutions_get_guid_v6.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v6+json",
      `educational-institutions/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/educational_institutions/educational_institutions_get_v6.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v6+json",
      `educational-institutions` + qs,
      this.context.authorization
    ).then(json => json);
  }
}

export { EducationalInstitutionService };
