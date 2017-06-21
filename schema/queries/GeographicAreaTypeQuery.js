import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { GeographicAreaTypeType } from "../types";
import { GeographicAreaTypeService } from "../../services";

const GeographicAreaTypeQuery = {
  type: GeographicAreaTypeType,
  description: "This API returns the details of a specific geographic" +
    " area type by the given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "The global identifier of a geographic area type" +
        " (GORGUID)."
    }
  },
  resolve: (root, args, context) =>
    new GeographicAreaTypeService(context).load(args.id)
};

const GeographicAreaTypesQuery = {
  type: new GraphQLList(GeographicAreaTypeType),
  description: "Provides the list of all geographic area types.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 }
  },
  resolve: (root, args, context) =>
    new GeographicAreaTypeService(context).list(args)
};

export { GeographicAreaTypeQuery, GeographicAreaTypesQuery };
