import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const MaritalStatusType = new GraphQLObjectType({
  name: "MaritalStatus",
  description: "Marital Status",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of a marital status to be used in" +
        " all external references to a marital status (STVMRTL)"
    },
    code: {
      type: GraphQLString,
      description: "The human readable code that identifies a marital status"
    },
    title: {
      type: GraphQLString,
      description: "The full name of a marital status"
    },
    maritalCategory: {
      type: GraphQLString,
      description: "The name of a higher level marital category of which" +
        " this category is a member"
    }
  })
});

export { MaritalStatusType };
