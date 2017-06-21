import { BaseService } from ".";

class InstructorService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/instructors/instructors_get_v9.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v9+json",
      `instructors/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/instructors/instructors_list_v9.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v9+json",
      `instructors` + qs,
      this.context.authorization
    ).then(json => json);
  }
}

export { InstructorService };
