import { BaseService } from ".";

class PersonHoldTypeService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/person_hold_types_get_id_v6.html
  get(args) {
    this.debug("get:", args.id);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.integration.v6+json",
      relativeURL: `person-hold-types/${args.id}`
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/person_hold_types_get_v6.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.integration.v6+json",
      relativeURL: `person-hold-types` + qs
    });
  }
}

export { PersonHoldTypeService };
