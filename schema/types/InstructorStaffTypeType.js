import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const InstructorStaffTypeType = new GraphQLObjectType({
  name: "InstructorStaffType",
  description: "Instructor Staff Type",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of the instructor staff type."
    },
    title: {
      type: GraphQLString,
      description: "The full name of the instructor staff type."
    },
    code: {
      type: GraphQLString,
      description: "A code that may be used to identify the instructor staff" +
        " type."
    }
  })
});

export { InstructorStaffTypeType };
