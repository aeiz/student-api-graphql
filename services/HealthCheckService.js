import { BaseService } from ".";

class HealthCheckService extends BaseService {
  get(args) {
    this.debug("get");
    return this.api
      .get({
        acceptHeader: "application/json",
        relativeURL: "healthcheck"
      })
      .then(json => json[0]);
  }
}

export { HealthCheckService };
