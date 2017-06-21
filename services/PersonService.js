import { BaseService } from ".";

class PersonService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/foundation/persons/person_search_v6.html
  search(args) {
    // TODO: implement
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/foundation/persons/person_get_guid_v6.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v6+json",
      `persons/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/foundation/persons/persons_get_v6.html
  list(args) {
    this.debug("list");
    // TODO: X-hedtech-totalCount ?
    let qs = this.createURLParameters(args);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v6+json",
      `persons` + qs,
      this.context.authorization
    ).then(json => json);
  }

  create(args) {
    // TODO: implement
  }

  update(args) {
    // TODO: implement
  }
}

export { PersonService };
