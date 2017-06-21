import { BaseService } from ".";

class RoomCharacteristicService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/room_characteristics_get_id_v8.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v8+json",
      `room-characteristics/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/room_characteristics_get_v8.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v8+json",
      `room-characteristics` + qs,
      this.context.authorization
    ).then(json => json);
  }
}

export { RoomCharacteristicService };
