import { BaseService } from ".";

class InstructorCategoryService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/instructor_categories_get_v9.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v9+json",
      `instructor-categories/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/instructor_categories_list_v9.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v9+json",
      `instructor-categories` + qs,
      this.context.authorization
    ).then(json => json);
  }
}

export { InstructorCategoryService };
