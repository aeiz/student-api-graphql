import { BaseService } from ".";

class SubjectService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/subject_get_guid_v4.html
  get(args) {
    this.debug("get:", args.id);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `subjects/${args.id}`
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/subjects_get_v4.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters({ ...args, max: args.limit });
    return this.api.list({
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `subjects` + qs
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/subjects_create_v4.html
  create(args) {
    return this.api.create({
      contentTypeHeader: "application/vnd.hedtech.integration.v4+json",
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `subjects`,
      request: args
    });
  }

  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/validation/subjects_update_guid_v4.html
  update(args) {
    return this.api.update({
      contentTypeHeader: "application/vnd.hedtech.integration.v4+json",
      acceptHeader: "application/vnd.hedtech.integration.v4+json",
      relativeURL: `subjects/${args.id}`,
      request: args
    });
  }
}

export { SubjectService };
