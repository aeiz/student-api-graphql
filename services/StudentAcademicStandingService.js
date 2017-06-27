import { BaseService } from ".";

class StudentAcademicStandingService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/student_academic_standings/student_academic_standings_get_v8.html
  get(args) {
    this.debug("get:", args.id);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.integration.v8+json",
      relativeURL: `student-academic-standings/${args.id}`
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/student_academic_standings/student_academic_standings_list_v8.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.integration.v8+json",
      relativeURL: `student-academic-standings` + qs
    });
  }
}

export { StudentAcademicStandingService };
