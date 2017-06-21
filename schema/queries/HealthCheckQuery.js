import { HealthCheckType } from "../types/HealthCheckType";
import { HealthCheckService } from "../../services/HealthCheckService";

const HealthCheckQuery = {
  type: HealthCheckType,
  description: "Retrieves the availability status of the Student API" +
    " application deployed.",
  resolve: (root, args, context) => new HealthCheckService(context).get()
};

export { HealthCheckQuery };
