import { BaseService } from ".";

class PersonFilterService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/person_filters/person_filter_get_id_V4.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v4+json",
      `person-filters/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/person_filters/person_filters_get_V4.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters({ ...args, max: args.limit });
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v4+json",
      `person-filters` + qs,
      this.context.authorization
    ).then(json => json);
  }
}

export { PersonFilterService };
