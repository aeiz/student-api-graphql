import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const InstructorCategoryType = new GraphQLObjectType({
  name: "InstructorCategory",
  description: "Instructor Category",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of the instructor category."
    },
    title: {
      type: GraphQLString,
      description: "The full name of the instructor category."
    },
    code: {
      type: GraphQLString,
      description: "A code that may be used to identify the instructor" +
        " category."
    }
  })
});

export { InstructorCategoryType };
