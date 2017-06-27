import { BaseService } from ".";

class CreditCategoryService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/credit_categories/credit_categories_get_id_v4.html
  get(args) {
    this.debug("get:", args.id);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `credit-categories/${args.id}`
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/credit_categories/credit_categories_get_v4.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `credit-categories` + qs
    });
  }
}

export { CreditCategoryService };
