import { BaseService } from ".";

class PersonVisaService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/persons_visas/person_visas_get_guid_v6.html
  get(args) {
    this.debug("get:", args.id);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.integration.v6+json",
      relativeURL: `person-visas/${args.id}`
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/persons_visas/person_visas_get_v6.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.integration.v6+json",
      relativeURL: `person-visas` + qs
    });
  }
}

export { PersonVisaService };
