import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";
import { AcademicPeriodType, StudentType } from ".";

import { AcademicPeriodService, StudentService } from "../../services";

const StudentRegistrationEligibilityType = new GraphQLObjectType({
  name: "StudentRegistrationEligibility",
  description: "Student Registration Eligibility",
  fields: () => ({
    studentId: {
      type: GraphQLID,
      description: "A global identifier of a person.",
      resolve: (root, args, context) => (root.student ? root.student.id : null)
    },
    student: {
      type: StudentType, // TODO: verify is this should be a student or person type
      description: "Student",
      resolve: (root, args, context) =>
        root.student ? new StudentService(context).load(root.student.id) : null
    },
    academicPeriodId: {
      type: GraphQLID,
      description: "The global identifier of a term.",
      resolve: (root, args, context) =>
        root.academicPeriod ? root.academicPeriod.id : null
    },
    academicPeriod: {
      type: AcademicPeriodType,
      description: "Academic Period",
      resolve: (root, args, context) =>
        root.academicPeriod
          ? new AcademicPeriodService(context).load(root.academicPeriod.id)
          : null
    },
    eligibilityStatus: {
      type: GraphQLString,
      description: "eligible or ineligible"
    },
    startOn: {
      type: GraphQLString,
      description: "Start date of term YYYY-dd-MM"
    },
    endOn: {
      type: GraphQLString,
      description: "End date of term YYYY-dd-MM"
    },
    alternatePin: {
      type: GraphQLString,
      description: "required or notRequired"
    }
  })
});

export { StudentRegistrationEligibilityType };
