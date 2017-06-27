import { BaseService } from ".";

class AcademicStandingService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/academic_standings_get_v8.html
  get(args) {
    this.debug("get:", args.id);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.integration.v8+json",
      relativeURL: `academic-standings/${args.id}`
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/academic_standings_list_v8.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters({ ...args, max: args.limit });
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.integration.v8+json",
      relativeURL: `academic-standings` + qs,
    });
  }
}

export { AcademicStandingService };
