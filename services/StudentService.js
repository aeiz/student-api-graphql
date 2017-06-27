import { BaseService } from ".";

class StudentService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/students/students_show_v7.html
  get(args) {
    this.debug("get:", args.id);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.integration.v7+json",
      relativeURL: `students/${args.id}`
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/students/students_list_v7.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.integration.v7+json",
      relativeURL: `students` + qs
    });
  }
}

export { StudentService };
