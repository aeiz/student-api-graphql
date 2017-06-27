import { BaseService } from ".";

class StudentHoldService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/erp_apis/student/student_apis/student_holds.html?highlight=holds
  get(args) {
    this.debug("get:", args.id);
    let qs = this.createURLParameters(args);
    return this.api.get({
      acceptHeader: "application/vnd.hedtech.v1+json",
      relativeURL: `students/${args.id}/holds` + qs
    });
  }
}

export { StudentHoldService };
