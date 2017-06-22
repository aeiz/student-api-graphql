import { BaseService } from ".";

class GradeChangeReasonService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/grade_change_reasons_get_guid_v4.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v4+json",
      `grade-change-reasons/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/grade_change_reasons_get_v4.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v4+json",
      `grade-change-reasons` + qs,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/grade_change_reasons_create_v4.html
  create(args) {
    return this.postByURL(
      "application/vnd.hedtech.integration.v4+json",
      "application/vnd.hedtech.integration.v4+json",
      `grade-change-reasons`,
      args,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/grade_change_reasons_update_id_v4.html
  update(args) {
    return this.putByURL({
      contentTypeHeader: "application/vnd.hedtech.integration.v4+json",
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `grade-change-reasons/${args.id}`,
      request: args,
      authorization: this.context.authorization
    }).then(json => json);
  }
}

export { GradeChangeReasonService };
