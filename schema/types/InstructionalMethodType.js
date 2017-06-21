import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const InstructionalMethodType = new GraphQLObjectType({
  name: "InstructionalMethod",
  description: "Instructional Method",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A global identifier of an instructional method to be" +
        " used in all external references."
    },
    abbreviation: {
      type: GraphQLString,
      description: "Human readable abbreviated name to an instructional" +
        " method."
    },
    title: {
      type: GraphQLString,
      description: "The full name of an instructional method"
    }
  })
});

export { InstructionalMethodType };
