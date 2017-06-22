import { BaseService } from ".";

class AcademicDisciplineService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/academic_disciplines_get_id_v4.html
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v4+json",
      // TODO: Implement v7
      //'application/vnd.hedtech.integration.v7+json',
      `academic-disciplines/${args.id}`,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/academic_disciplines_get_v4.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters({...args, max: args.limit});
    return this.fetchResponseByURL(
      "application/vnd.hedtech.integration.v4+json",
      // TODO: Implement v7
      //'application/vnd.hedtech.integration.v7+json',
      `academic-disciplines` + qs,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/academic_disciplines_create.html
  create(args) {
    return this.postByURL(
      "application/vnd.hedtech.integration.v4+json",
      "application/vnd.hedtech.integration.v4+json",
      `academic-disciplines`,
      args,
      this.context.authorization
    ).then(json => json);
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/academic_disciplines_update.html
  update(args) {
    return this.putByURL(
      "application/vnd.hedtech.integration.v4+json",
      "application/vnd.hedtech.integration.v4+json",
      `academic-disciplines/${args.id}`,
      args,
      this.context.authorization
    ).then(json => json);
  }
}

export { AcademicDisciplineService };
