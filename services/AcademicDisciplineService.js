import { BaseService } from ".";

class AcademicDisciplineService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/academic_disciplines_get_id_v4.html
  get(args) {
    this.debug("get:", args.id);
    // TODO: Implement v7: application/vnd.hedtech.integration.v7+json
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `academic-disciplines/${args.id}`
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/academic_disciplines_get_v4.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters({ ...args, max: args.limit });
    // TODO: Implement v7: application/vnd.hedtech.integration.v7+json
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `academic-disciplines` + qs
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/academic_disciplines_create.html
  create(args) {
    return this.api.create({
      contentTypeHeader: "application/vnd.hedtech.integration.v4+json",
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `academic-disciplines`,
      request: args
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/academic_disciplines_update.html
  update(args) {
    return this.api.update({
      contentTypeHeader: "application/vnd.hedtech.integration.v4+json",
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `academic-disciplines/${args.id}`,
      request: args
    });
  }
}

export { AcademicDisciplineService };
