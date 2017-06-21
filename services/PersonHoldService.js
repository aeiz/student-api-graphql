import { BaseService } from ".";

class PersonHoldService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/persons_holds/person_holds_get_id_v6.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v6+json",
      `person-holds/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/persons_holds/person_holds_get_v6.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v6+json",
      `person-holds` + qs,
      this.context.authorization
    ).then(json => json);
  }
}

export { PersonHoldService };
