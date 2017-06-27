import { BaseService } from ".";

class InstructorStaffTypeService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/instructor_staff_types_get_v9.html
  get(args) {
    this.debug("get:", args.id);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.integration.v9+json",
      relativeURL: `instructor-staff-types/${args.id}`
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/instructor_staff_types_list_v9.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.integration.v9+json",
      relativeURL: `instructor-staff-types` + qs
    });
  }
}

export { InstructorStaffTypeService };
