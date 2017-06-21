import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const RestrictionTypeType = new GraphQLObjectType({
  name: "RestrictionType",
  description: "Restriction Type",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A globally unique identifier (STVHLDD)"
    },
    abbreviation: {
      type: GraphQLString,
      description: "A shortened or contracted form of a word or phrase, used" +
        " to represent the whole, as Dr. for Doctor. Abbreviations are not" +
        " assumed to be unique."
    },
    title: {
      type: GraphQLString,
      description: "The full name of the restriction class."
    }
  })
});

export { RestrictionTypeType };
