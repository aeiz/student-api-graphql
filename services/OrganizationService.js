import { BaseService } from ".";

class OrganizationService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/foundation/organizations/organization_get_guid_v6.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v6+json",
      `organizations/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/foundation/organizations/organization_get_v6.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v6+json",
      `organizations` + qs,
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

export { OrganizationService };
