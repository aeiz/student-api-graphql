import { BaseService } from ".";

class AddressService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/addresses/addresses_get_v6.html
  get(args) {
    this.debug("get:", args.id);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.integration.v6+json",
      relativeURL: `addresses/${args.id}`
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/addresses/addresses_list_v6.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.integration.v6+json",
      relativeURL: `addresses` + qs
    });
  }
}

export { AddressService };
