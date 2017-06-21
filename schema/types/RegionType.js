import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const RegionType = new GraphQLObjectType({
  name: "Region",
  description: "Region",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'The global identifier of the region.'
    },
    code: {
      type: GraphQLString,
      description: "The ISO 3166-2 code of a region within the country"
    },
    title: {
      type: GraphQLString,
      description: "The full name of the region"
    }
  })
});

export { RegionType };
