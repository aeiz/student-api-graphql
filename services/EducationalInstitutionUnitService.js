import { BaseService } from ".";

class EducationalInstitutionUnitService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/educational_institution_units/educational_institution_units_show_v6.html
  get(args) {
    this.debug("get:", args.id);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.integration.v6+json",
      relativeURL: `educational-institution-units/${args.id}`
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/educational_institution_units/educational_institution_units_list_v6.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.integration.v6+json",
      relativeURL: `educational-institution-units` + qs
    });
  }
}

export { EducationalInstitutionUnitService };
