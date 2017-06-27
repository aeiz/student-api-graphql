import { BaseService } from ".";

class StudentClassScheduleService extends BaseService {
  // https://xedocs.ellucian.com/xe-banner-api/erp_apis/student/student_apis/student_class_schedule.html
  get(args) {
    this.debug("get:", args.id);
    return this.api
      .get({
        acceptHeader: "application/vnd.hedtech.v1+json",
        relativeURL: `students/${args.id}/class-schedules`
      })
      .then(json => json[0]);
  }

  // https://xedocs.ellucian.com/xe-banner-api/erp_apis/student/student_apis/student_class_schedule.html
  list(args) {
    this.debug("list");
    let qs = this.createURLParameters(args);
    return this.api
      .list({
        acceptHeader: "application/vnd.hedtech.v1+json",
        relativeURL: `students/${args.id}/class-schedules` + qs // TODO: make args.bannerId?
      })
      .then(json => json[0]);
  }
}

export { StudentClassScheduleService };
