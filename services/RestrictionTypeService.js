import { BaseService } from ".";

class RestrictionTypeService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/restriction_types_get_guid_v4.html
  get(args) {
    this.debug("get:", args.id);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `restriction-types/${args.id}`
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/room_types_get.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters({ ...args, max: args.limit });
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `restriction-types` + qs
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/restriction_types_create_v4.html
  create(args) {
    return this.api.create({
      contentTypeHeader: "application/vnd.hedtech.integration.v4+json",
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `restriction-types`,
      request: args
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/restriction_types_update_v4.html
  update(args) {
    return this.api.update({
      contentTypeHeader: "application/vnd.hedtech.integration.v4+json",
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `restriction-types/${args.id}`,
      request: args
    });
  }
}

export { RestrictionTypeService };
