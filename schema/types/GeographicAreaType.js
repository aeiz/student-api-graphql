import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} from "graphql";

import { GeographicAreaTypeType } from ".";
import { GeographicAreaTypeService } from "../../services";

const GeographicAreaType = new GraphQLObjectType({
  name: "GeographicArea",
  description: "Geographic Area",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of a geographic area(GORGUID)."
    },
    code: {
      type: GraphQLString,
      description: "The code of the area(STVGEOR_CODE-STVGEOD_CODE)."
    },
    title: {
      type: GraphQLString,
      description: "The full name of a geographic area" +
        " (STVGEOR_DESC-STVGEOD_DESC)."
    },
    category: {
      type: GraphQLString,
      description: "A category of geographic area type such as" +
        " 'governmental', 'postal', 'recruitment', 'institutional' and" +
        " 'fundraising'.",
      resolve: (root, args, context) => (root.type ? root.type.category : null)
    },
    typeId: {
      type: GraphQLID,
      description: "The global identifier for the Geographic Area Type.",
      resolve: (root, args, context) => (root.type ? root.type.id : null)
    },
    type: {
      type: GeographicAreaTypeType,
      description: "Geographic Area Type",
      resolve: (root, args, context) =>
        new GeographicAreaTypeService(context).load(root.type.id)
    },
    includedAreas: {
      type: new GraphQLList(GeographicAreaType),
      description: "List of Included Areas"
    }
  })
});

export { GeographicAreaType };
