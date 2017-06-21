import { BaseService } from ".";

class RestrictionTypeService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/restriction_types_get_guid_v4.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v4+json",
      `restriction-types/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/room_types_get.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters({ ...args, max: args.limit });
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v4+json",
      `restriction-types` + qs,
      this.context.authorization
    ).then(json => json);
  }

  create(args) {
    // TODO: Implement
  }

  update(args) {
    // TODO: Implement
  }
}

export { RestrictionTypeService };
