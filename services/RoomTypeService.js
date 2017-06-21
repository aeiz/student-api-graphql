import { BaseService } from ".";

class RoomTypeService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/room_types_get_guid.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v4+json",
      `room-types/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/room_types_get.html
  list(args) {
    this.debug("list");
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v4+json",
      `room-types`,
      this.context.authorization
    ).then(json => json);
  }
}

export { RoomTypeService };
