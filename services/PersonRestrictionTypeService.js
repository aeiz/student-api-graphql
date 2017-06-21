import { BaseService } from ".";

class PersonRestrictionTypeService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/person_name_types_get.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v1+json",
      `persons/${args.id}/restriction-types`,
      this.context.authorization
    ).then(json => json);
  }
}

export { PersonRestrictionTypeService };
