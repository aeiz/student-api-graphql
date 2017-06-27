import { BaseService } from ".";

class StudentGradeService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/erp_apis/student/student_apis/student_grades.html
  get(args) {
    this.debug("get:", args.id);
    let qs = this.createURLParameters(args);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.v1+json",
      relativeURL: `students/${args.id}/grades` + qs,
    });
  }
}

export { StudentGradeService };
