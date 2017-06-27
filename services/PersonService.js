import { BaseService } from ".";

class PersonService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/foundation/persons/person_search_v6.html
  search(args) {
    // TODO: implement
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/foundation/persons/person_get_guid_v6.html
  get(args) {
    this.debug("get:", args.id);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.integration.v6+json",
      relativeURL: `persons/${args.id}`
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/foundation/persons/persons_get_v6.html
  list(args) {
    this.debug("list");
    // TODO: X-hedtech-totalCount ?
    let qs = this.createURLParameters(args);
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.integration.v6+json",
      relativeURL: `persons` + qs,
    });
  }

  create(args) {
    // TODO: implement
  }

  update(args) {
    // TODO: implement
  }
}

export { PersonService };
