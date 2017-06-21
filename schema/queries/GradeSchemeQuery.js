import { GraphQLID, GraphQLList, GraphQLInt, GraphQLString } from "graphql";
import { OrderAscDescArg, SortByCode } from "../types/args";
import { GradeSchemeType } from "../types";
import { GradeSchemeService } from "../../services";

const GradeSchemeQuery = {
  type: GradeSchemeType,
  description: "This API returns a grade scheme data by given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "A global identifier of a grade scheme (SHRGSCH_GUID)."
    }
  },
  resolve: (root, args, context) =>
    new GradeSchemeService(context).load(args.id)
};

const GradeSchemesQuery = {
  type: new GraphQLList(GradeSchemeType),
  description: "Provides the list of grade schemes.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    sort: { type: SortByCode },
    order: { type: OrderAscDescArg }
  },
  resolve: (root, args, context) => new GradeSchemeService(context).list(args)
};

export { GradeSchemeQuery, GradeSchemesQuery };
