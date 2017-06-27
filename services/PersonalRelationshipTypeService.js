import { BaseService } from ".";

class PersonalRelationshipTypeService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/personal_relationship_types_get_v7.html
  get(args) {
    this.debug("get:", args.id);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.integration.v7+json",
      relativeURL: `personal-relationship-types/${args.id}`
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/personal_relationship_types_list_v7.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.integration.v7+json",
      relativeURL: `personal-relationship-types` + qs
    });
  }
}

export { PersonalRelationshipTypeService };
