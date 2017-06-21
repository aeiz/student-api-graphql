import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const EnrollmentStatusType = new GraphQLObjectType({
  name: "EnrollmentStatus",
  description: "Enrollment Status",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of an enrollment status for use in" +
        " all external references to an enrollment status (GORGUID)."
    },
    code: {
      type: GraphQLString,
      description: "The human-readable code that identifies an enrollment" +
        " status (SOBCACT)."
    },
    status: {
      type: GraphQLString,
      description: "The status of the enrollment such as 'active','inactive'" +
        " and 'complete'."
    },
    title: {
      type: GraphQLString,
      description: "The full name of an enrollment status (STVCACT)."
    }
  })
});

export { EnrollmentStatusType };
