import { BaseService } from ".";

class GradeModeService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/grade_modes_get_guid_v4.html
  get(args) {
    this.debug("get:", args.id);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `grade-modes/${args.id}`
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/grade_modes_get_v4.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters({ ...args, max: args.limit });
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `grade-modes` + qs
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/grade_modes_create.html
  create(args) {
    return this.api.create({
      contentTypeHeader: "application/vnd.hedtech.integration.v4+json",
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `grade-modes`,
      request: args
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/grade_modes_update.html
  update(args) {
    return this.putByURL({
      contentTypeHeader: "application/vnd.hedtech.integration.v4+json",
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `grade-modes/${args.id}`,
      request: args
    });
  }
}

export { GradeModeService };
