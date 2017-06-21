import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { SortByCodeOrTitle, OrderAscDescArg } from "../types/args";
import { AcademicLevelType } from "../types";
import { AcademicLevelService } from "../../services";

const AcademicLevelQuery = {
  type: AcademicLevelType,
  description: "This API returns a academic level data by given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "A globally unique identifier of the academic level."
    }
  },
  resolve: (root, args, context) =>
    new AcademicLevelService(context).load(args.id)
};

const AcademicLevelsQuery = {
  type: new GraphQLList(AcademicLevelType),
  description: "Provides the list of academic levels.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 },
    sort: { type: SortByCodeOrTitle },
    order: { type: OrderAscDescArg }
  },
  resolve: (root, args, context) => new AcademicLevelService(context).list(args)
};

export { AcademicLevelQuery, AcademicLevelsQuery };
