import { BaseService } from ".";

class StudentAcademicStandingService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/student_academic_standings/student_academic_standings_get_v8.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v8+json",
      `student-academic-standings/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/student_academic_standings/student_academic_standings_list_v8.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v8+json",
      `student-academic-standings` + qs,
      this.context.authorization
    ).then(json => json);
  }
}

export { StudentAcademicStandingService };
