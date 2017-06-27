import { BaseService } from ".";

class InstructionalMethodService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/instructional_methods_get_id_v4.html
  get(args) {
    this.debug("get:", args.id);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `instructional-methods/${args.id}`
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/instructional_methods_get_v4.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters({ ...args, max: args.limit });
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `instructional-methods` + qs
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/instructional_methods_create_v4.html
  create(args) {
    return this.api.create({
      contentTypeHeader: "application/vnd.hedtech.integration.v4+json",
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `instructional-methods`,
      request: args
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/instructional_methods_update_id_v4.html
  update(args) {
    return this.api.update({
      contentTypeHeader: "application/vnd.hedtech.integration.v4+json",
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `instructional-methods/${args.id}`,
      request: args
    });
  }
}

export { InstructionalMethodService };
