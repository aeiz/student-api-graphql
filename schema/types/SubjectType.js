import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const SubjectType = new GraphQLObjectType({
  name: "Subject",
  description: "Subject",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A global identifier of a subject to be used in all" +
        " external references to the subject(STVSUBJ)."
    },
    abbreviation: {
      type: GraphQLString,
      description: "Human readable abbreviated name to a subject."
    },
    title: {
      type: GraphQLString,
      description: "The full name of a subject."
    }
  })
});

export { SubjectType };
