import { BaseService } from ".";

class InstructionalEventService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/instructional_events/instructional-events_get_guid_v4.html
  get(args) {
    this.debug("get:", args.id);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `instructional-events/${args.id}`
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/instructional_events/instructional-events_get_v4.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters({ ...args, max: args.limit });
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `instructional-events` + qs
    });
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
