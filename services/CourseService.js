import { BaseService } from '.';

class CourseService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/courses/course_get_guid_v6.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      'application/vnd.hedtech.integration.v6+json',
      `courses/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/courses/courses_list_v6.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.fetchResponseByURL(
      'application/vnd.hedtech.integration.v6+json',
      `courses` + qs
      ,
      this.context.authorization
    ).then(json => json);
  }

  // TODO: create
  // TODO: update
}

export { CourseService };
