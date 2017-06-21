import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const RaceType = new GraphQLObjectType({
  name: "RaceType",
  description: "Race",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of a race to be used in all" +
        " external references to a race."
    },
    code: {
      type: GraphQLString,
      description: "Human readable code that identifies a racial category" +
        " (GORRACE_RACE_CDE)."
    },
    title: {
      type: GraphQLString,
      description: "The full name of a racial category(GORRACE_DESC)."
    },
    countryCode: {
      type: GraphQLString,
      description: "The code of country(USA)",
      resolve: (root, args, context) =>
        root.reporting.country ? root.reporting.country.code : null
    },
    racialCategory: {
      type: GraphQLString,
      description: "A mapping to a standard category for the racial category.",
      resolve: (root, args, context) =>
        root.reporting.country ? root.reporting.country.racialCategory : null
    }
  })
});

export { RaceType };
