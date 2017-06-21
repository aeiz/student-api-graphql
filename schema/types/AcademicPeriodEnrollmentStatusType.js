import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const AcademicPeriodEnrollmentStatusType = new GraphQLObjectType({
  name: "AcademicPeriodEnrollmentStatus",
  description: "Academic Period Enrollment Status",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A global identifier of a enrollment status (STVESTS_GUID)."
    },
    code: {
      type: GraphQLString,
      description: "A code that identifies a enrollment status (STVESTS_CODE)."
    },
    title: {
      type: GraphQLString,
      description: "The full name of a enrollment status (STVESTS_DESC)."
    }
  })
});

export { AcademicPeriodEnrollmentStatusType };
