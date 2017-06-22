import { BaseService } from ".";

class GradeModeService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/grade_modes_get_guid_v4.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v4+json",
      `grade-modes/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/grade_modes_get_v4.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters({ ...args, max: args.limit });
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v4+json",
      `grade-modes` + qs,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/grade_modes_create.html
  create(args) {
    return this.postByURL(
      "application/vnd.hedtech.integration.v4+json",
      "application/vnd.hedtech.integration.v4+json",
      `grade-modes`,
      args,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/grade_modes_update.html
  update(args) {
    return this.putByURL(
      "application/vnd.hedtech.integration.v4+json",
      "application/vnd.hedtech.integration.v4+json",
      `grade-modes/${args.id}`,
      args,
      this.context.authorization
    ).then(json => json);
  }
}

export { GradeModeService };
