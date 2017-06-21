import { GraphQLID, GraphQLList, GraphQLInt, GraphQLString } from "graphql";
import { OrderAscDescArg, SortByTitleOrAbbreviation } from "../types/args";
import { InstructionalMethodType } from "../types";
import { InstructionalMethodService } from "../../services";

const InstructionalMethodQuery = {
  type: InstructionalMethodType,
  description: "This API returns an instructional method data by given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "A global identifier of an instructional method to be" +
        " used in all external references."
    }
  },
  resolve: (root, args, context) =>
    new InstructionalMethodService(context).load(args.id)
};

const InstructionalMethodsQuery = {
  type: new GraphQLList(InstructionalMethodType),
  description: "Provides the list of instructional methods.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    sort: { type: SortByTitleOrAbbreviation },
    order: { type: OrderAscDescArg }
  },
  resolve: (root, args, context) =>
    new InstructionalMethodService(context).list(args)
};

export { InstructionalMethodQuery, InstructionalMethodsQuery };
