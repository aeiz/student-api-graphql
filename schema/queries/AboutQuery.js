import { AboutType } from "../types/AboutType";
import { AboutService } from "../../services/AboutService";

const AboutQuery = {
  type: AboutType,
  description: "Retrieves the current version details of the" +
    " Student API application deployed.",
  resolve: (root, args, context) => new AboutService(context).get({})
};

export { AboutQuery };
