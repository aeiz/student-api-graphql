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

  create(args) {
    // TODO: Implement?
  }

  update(args) {
    // TODO: Implement?
  }
}

export { AcademicDisciplineService };
