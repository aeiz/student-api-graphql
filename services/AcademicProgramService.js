import { BaseService } from ".";

class AcademicProgramService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/academic_programs/academic_programs_get_guid_v7.html
  get(args) {
    this.debug("get:", args.id);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.integration.v7+json",
      relativeURL: `academic-programs/${args.id}`
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/academic_programs/academic_programs_get_v7.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.integration.v7+json",
      relativeURL: `academic-programs` + qs
    });
  }
}

export { AcademicProgramService };
