import { BaseService } from ".";

class StudentHoldService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/erp_apis/student/student_apis/student_holds.html?highlight=holds
  get(args) {
    this.debug("get:", args.id);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.v1+json",
      `students/${args.id}/holds`,
      this.context.authorization
    ).then(json => json);
  }
}

export { StudentHoldService };
