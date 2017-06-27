import { BaseService } from ".";

class InstructorTenureTypeService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/instructor_tenure_types_list_v9.html
  get(args) {
    this.debug("get:", args.id);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.integration.v9+json",
      relativeURL: `instructor-tenure-types/${args.id}`
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/instructor_tenure_types_get_v9.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.integration.v9+json",
      relativeURL: `instructor-tenure-types` + qs
    });
  }
}

export { InstructorTenureTypeService };
