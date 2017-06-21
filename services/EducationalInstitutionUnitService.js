import { BaseService } from ".";

class EducationalInstitutionUnitService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/educational_institution_units/educational_institution_units_show_v6.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v6+json",
      `educational-institution-units/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/educational_institution_units/educational_institution_units_list_v6.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v6+json",
      `educational-institution-units` + qs,
      this.context.authorization
    ).then(json => json);
  }
}

export { EducationalInstitutionUnitService };
