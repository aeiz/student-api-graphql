import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const GeographicAreaTypeType = new GraphQLObjectType({
  name: "GeographicAreaType",
  description: "Geographic Area Type",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of a geographic area type(GORGUID)."
    },
    code: {
      type: GraphQLString,
      description: "The code of the geographic area type" +
        " (STVGEOR_CODE or STVGEOD_CODE)"
    },
    title: {
      type: GraphQLString,
      description: "The full name of a geographic area type" +
        " (STVGEOR_DESC or STVGEOD_DESC)."
    },
    category: {
      type: GraphQLString,
      description: "A category of geographic area type such as" +
        " 'governmental', 'postal', 'recruitment', 'institutional' and" +
        " 'fundraising'."
    },
    description: {
      type: GraphQLString,
      description: "The description of a geographic area type."
    }
  })
});

export { GeographicAreaTypeType };
