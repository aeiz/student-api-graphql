import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { SortByCodeOrTitle, OrderAscDescArg } from "../types/args";
import { GradeChangeReasonType } from "../types";
import { GradeChangeReasonService } from "../../services";

const GradeChangeReasonQuery = {
  type: GradeChangeReasonType,
  description: "This API returns a grade change reason data by given ID." +
    " by the given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "Globally-unique identifier of the grade change" +
        " reason (STVGCHG)"
    }
  },
  resolve: (root, args, context) =>
    new GradeChangeReasonService(context).load(args.id)
};

const GradeChangeReasonsQuery = {
  type: new GraphQLList(GradeChangeReasonType),
  description: "Provides the list of grade-change-reasons.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    sort: { type: SortByCodeOrTitle },
    order: { type: OrderAscDescArg }
  },
  resolve: (root, args, context) =>
    new GradeChangeReasonService(context).list(args)
};

export { GradeChangeReasonQuery, GradeChangeReasonsQuery };
