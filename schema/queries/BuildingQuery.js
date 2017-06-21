import { GraphQLID, GraphQLList, GraphQLString, GraphQLInt } from "graphql";
import { OrderAscDescArg, SortByCodeOrTitle } from "../types/args";
import { BuildingType } from "../types";
import { BuildingService } from "../../services";

const BuildingQuery = {
  type: BuildingType,
  description: "This API returns a building data by given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "A global identifier of a building to be used in all" +
        " external references to the building(SLBBLDG)."
    }
  },
  resolve: (root, args, context) => new BuildingService(context).load(args.id)
};

const BuildingsQuery = {
  type: new GraphQLList(BuildingType),
  description: "Provides the list of buildings.",
  args: {
    siteId: {
      type: GraphQLString,
      description: "A globally unique identifier(STVCAMP)"
    },
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    sort: { type: SortByCodeOrTitle },
    order: { type: OrderAscDescArg }
  },
  resolve: (root, args, context) => new BuildingService(context).list(args)
};

export { BuildingQuery, BuildingsQuery };
