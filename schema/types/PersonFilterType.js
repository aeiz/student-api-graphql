import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const PersonFilterType = new GraphQLObjectType({
  name: "PersonFilter",
  description: "Person Filter",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A global identifier of a named person filter collection." +
        " (GLBEXTR)"
    },
    code: {
      type: GraphQLString,
      description: "The code of a person filter."
    },
    title: {
      type: GraphQLString,
      description: "The full name of a person filter."
    }
  })
});

export { PersonFilterType };
