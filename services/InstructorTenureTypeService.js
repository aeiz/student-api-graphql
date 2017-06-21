import { BaseService } from ".";

class InstructorTenureTypeService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/instructor_tenure_types_list_v9.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v9+json",
      `instructor-tenure-types/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/instructor_tenure_types_get_v9.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v9+json",
      `instructor-tenure-types` + qs,
      this.context.authorization
    ).then(json => json);
  }
}

export { InstructorTenureTypeService };
