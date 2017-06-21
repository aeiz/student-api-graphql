import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const InterestType = new GraphQLObjectType({
  name: "InterestType",
  description: "Interest",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A global identifier of a interest record from table" +
        " STVINTS"
    },
    title: {
      type: GraphQLString,
      description: "The full name of an interest"
    },
    code: {
      type: GraphQLString,
      description: "The code for the interest"
    }
  })
});

export { InterestType };
