import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const TermTypeType = new GraphQLObjectType({
  name: "TermType",
  description: "Term Type",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The Surrogate Id of the STVTRMT table"
    },
    code: {
      type: GraphQLString,
      description: "Code value to identify the type of term"
    },
    description: {
      type: GraphQLString,
      description: "Description of the type of term associated with the term type code"
    },
    version: {
      type: GraphQLString,
      description: "Optimistic lock token"
    }
  })
});

export { TermTypeType };
