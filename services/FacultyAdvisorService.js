import { BaseService } from ".";

class FacultyAdvisorService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/erp_apis/student/advising/advising_facultyadvisor.html?highlight=advisors
  get(args) {
    this.debug("get:", args.id);
    let qs = this.createURLParameters(args);
    return this.fetchResponseByURL(
      "application/vnd.hedtech.v1+json",
      `faculty-advisors/${args.id}` + qs,
      this.context.authorization
    ).then(json => json);
  }
}

export { FacultyAdvisorService };
