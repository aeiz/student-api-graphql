import { BaseService } from ".";

class StudentRegistrationEligibilityService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/ethos_apis/student/student_registration_eligibilities/student_registration_eligibility_list_v9.html
  get(args) {
    this.debug("get:", args);
    return this.api
      .get({
        acceptHeader: "application/vnd.hedtech.integration.v9+json",
        relativeURL: `student-registration-eligibilities?criteria=` +
          JSON.stringify(args)
      })
      .then(json => json[0]);
  }
}

export { StudentRegistrationEligibilityService };
