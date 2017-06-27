import { BaseService } from ".";

class StudentAcademicPeriodProfileService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/student_academic_period_profiles/student_academic_period_profiles_get_v7.html
  get(args) {
    this.debug("get:", args.id);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.integration.v7+json",
      relativeURL: `student-academic-period-profiles/${args.id}`
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/student_academic_period_profiles/student_academic_period_profiles_list_v7.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.integration.v7+json",
      relativeURL: `student-academic-period-profiles` + qs
    });
  }
}

export { StudentAcademicPeriodProfileService };
