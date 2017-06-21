import { GraphQLID } from "graphql";
import { StudentRegistrationEligibilityType } from "../types";
import { StudentRegistrationEligibilityService } from "../../services";

const StudentRegistrationEligibilityQuery = {
  type: StudentRegistrationEligibilityType,
  description: "Determines if the given student is eligibile to register in" +
    " the given term at this point in time.",
  args: {
    student: { type: GraphQLID, description: "person GUID" },
    academicPeriod: { type: GraphQLID, description: "term GUID" }
  },
  resolve: (root, args, context) =>
    new StudentRegistrationEligibilityService(context).get(args)
};

export { StudentRegistrationEligibilityQuery };
