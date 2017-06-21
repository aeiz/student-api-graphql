import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const SubRegionType = new GraphQLObjectType({
  name: "SubRegion",
  description: "Sub-Region",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'The global identifier of the subregion.'
    },
    code: {
      type: GraphQLString,
      description: "The code of a sub-region. This should be based on ISO" +
        " 3166-2, if applicable"
    },
    title: {
      type: GraphQLString,
      description: "The name of a subregion"
    }
  })
});

export { SubRegionType };
