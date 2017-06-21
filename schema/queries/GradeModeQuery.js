import { GraphQLID, GraphQLList, GraphQLInt, GraphQLString } from "graphql";
import { SortByCodeOrTitle, OrderAscDescArg } from "../types/args";
import { GradeModeType } from "../types";
import { GradeModeService } from "../../services";

const GradeModeQuery = {
  type: GradeModeType,
  description: "This API returns a grade mode data by given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "The global identifier of the grade modes."
    }
  },
  resolve: (root, args, context) => new GradeModeService(context).load(args.id)
};

const GradeModesQuery = {
  type: new GraphQLList(GradeModeType),
  description: "Provides the list of grade modes.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 },
    sort: { type: SortByCodeOrTitle },
    order: { type: OrderAscDescArg }
  },
  resolve: (root, args, context) => new GradeModeService(context).list(args)
};

export { GradeModeQuery, GradeModesQuery };
