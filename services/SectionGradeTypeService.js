import { BaseService } from ".";

class SectionGradeTypeService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/section_grade_types_get_id_v4.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v4+json",
      `section-grade-types/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/section_grade_types_get_v4.html
  list(args) {
    this.debug("list");
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v4+json",
      `section-grade-types`,
      this.context.authorization
    ).then(json => json);
  }
}

export { SectionGradeTypeService };
