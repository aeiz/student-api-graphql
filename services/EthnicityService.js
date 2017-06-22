import { BaseService } from ".";

class EthnicityService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/ethnicities_get_id_v6.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v6+json",
      `ethnicities/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/ethnicities_get_v6.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v6+json",
      `ethnicities` + qs,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/ethnicities_create_v1.html
  create(args) {
    return this.postByURL({
      contentTypeHeader: "application/vnd.hedtech.integration.v1+json",
      acceptHeader: "application/vnd.hedtech.integration.v1+json",
      relativeURL: `ethnicities`,
      request: { ...args, guid: args.id },
      authorization: this.context.authorization
    }).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/ethnicities_update_guid_v1.html
  update(args) {
    return this.putByURL({
      contentTypeHeader: "application/vnd.hedtech.integration.v1+json",
      acceptHeader: "application/vnd.hedtech.integration.v1+json",
      relativeURL: `ethnicities/${args.id}`,
      request: { ...args, guid: args.id },
      authorization: this.context.authorization
    }).then(json => json);
  }
}

export { EthnicityService };
