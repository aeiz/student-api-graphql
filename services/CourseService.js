import { BaseService } from ".";

class CourseService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/courses/course_get_guid_v6.html
  get(args) {
    this.debug("get:", args.id);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.integration.v6+json",
      relativeURL: `courses/${args.id}`
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/courses/courses_list_v6.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.integration.v6+json",
      relativeURL: `courses` + qs
    });
  }

  // TODO: create
  // TODO: update
}

export { CourseService };
