import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const CreditCategoryType = new GraphQLObjectType({
  name: "CreditCategory",
  description: "Credit Category",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A global identifier of a credit category."
    },
    code: {
      type: GraphQLString,
      description: "A human readable reference code to identify a particular" +
        " credit category."
    },
    title: {
      type: GraphQLString,
      description: "The title of credit category."
    },
    description: {
      type: GraphQLString,
      description: "A description of the substance and nature of a credit" +
        " category."
    },
    creditType: {
      type: GraphQLString,
      description: "The higher-level category of academic credits."
    }
  })
});

export { CreditCategoryType };
