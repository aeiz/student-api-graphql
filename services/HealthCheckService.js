import { BaseService } from ".";

class HealthCheckService extends BaseService {
  get(args) {
    this.debug("get");
    return this.fetchResponseByURL(
      "application/json",
      "healthcheck",
      this.context.authorization
    ).then(json => json[0]);
  }
}

export { HealthCheckService };
