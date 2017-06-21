import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

import { SiteType } from ".";

import { SiteService } from "../../services";

const BuildingType = new GraphQLObjectType({
  name: "Building",
  description: "Building",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A global identifier of a building to be used in all" +
        " external references to the building(SLBBLDG)."
    },
    code: {
      type: GraphQLString,
      description: "A code that identifies a building."
    },
    title: {
      type: GraphQLString,
      description: "The full name of the building."
    },
    siteId: {
      type: GraphQLID,
      description: "The global identifier for Site (STVCAMP).",
      resolve: (root, args, context) => root.site.id
    },
    site: {
      type: SiteType,
      description: "Site",
      resolve: (root, args, context) =>
        new SiteService(context).load(root.site.id)
    }
  })
});

export { BuildingType };
