import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { GeographicAreaType } from "../types";
import { GeographicAreaService } from "../../services";

const GeographicAreaQuery = {
  type: GeographicAreaType,
  description: "This API returns the details of a specific geographic" +
    " area by the given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "The global identifier of a geographic area type" +
        " (GORGUID)."
    }
  },
  resolve: (root, args, context) =>
    new GeographicAreaService(context).load(args.id)
};

const GeographicAreasQuery = {
  type: new GraphQLList(GeographicAreaType),
  description: "Provides the list of all geographic areas.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt }
  },
  resolve: (root, args, context) =>
    new GeographicAreaService(context).list(args)
};

export { GeographicAreaQuery, GeographicAreasQuery };
