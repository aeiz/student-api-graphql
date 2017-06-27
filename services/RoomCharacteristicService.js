import { BaseService } from ".";

class RoomCharacteristicService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/room_characteristics_get_id_v8.html
  get(args) {
    this.debug("get:", args.id);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.integration.v8+json",
      relativeURL: `room-characteristics/${args.id}`
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/room_characteristics_get_v8.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.integration.v8+json",
      relativeURL: `room-characteristics` + qs
    });
  }
}

export { RoomCharacteristicService };
