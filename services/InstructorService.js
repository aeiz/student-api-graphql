import { BaseService } from ".";

class InstructorService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/instructors/instructors_get_v9.html
  get(args) {
    this.debug("get:", args.id);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.integration.v9+json",
      relativeURL: `instructors/${args.id}`
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/instructors/instructors_list_v9.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.integration.v9+json",
      relativeURL: `instructors` + qs
    });
  }
}

export { InstructorService };
