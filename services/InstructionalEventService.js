import { BaseService } from ".";

class InstructionalEventService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/instructional_events/instructional-events_get_guid_v4.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v4+json",
      `instructional-events/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/instructional_events/instructional-events_get_v4.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters({ ...args, max: args.limit });
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v4+json",
      `instructional-events` + qs,
      this.context.authorization
    ).then(json => json);
  }

  create(args) {
    // TODO: Implement
    debug("CREATE: This feature is not implemented.");
    throw Error("Create not implemented.");
  }

  update(args) {
    // TODO: Implement
    debug("UPDATE: This feature is not implemented.");
    throw Error("Update not implemented.");
  }
}

export { InstructionalEventService };
