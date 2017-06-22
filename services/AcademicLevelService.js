import { BaseService } from ".";

class AcademicLevelService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/academic_levels_get_id_v4.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v4+json",
      `academic-levels/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/academic_levels_get_v4.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters({ ...args, max: args.limit });
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v4+json",
      `academic-levels` + qs,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/academic_levels_create_v4.html
  create(args) {
    return this.postByURL(
      "application/vnd.hedtech.integration.v4+json",
      "application/vnd.hedtech.integration.v4+json",
      `academic-levels`,
      args,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/academic_levels_update_id_v4.html
  update(args) {
    return this.putByURL(
      "application/vnd.hedtech.integration.v4+json",
      "application/vnd.hedtech.integration.v4+json",
      `academic-levels/${args.id}`,
      args,
      this.context.authorization
    ).then(json => json);
  }
}

export { AcademicLevelService };
