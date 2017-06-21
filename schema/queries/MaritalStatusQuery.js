import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { SortByCodeOrTitle, OrderAscDescArg } from "../types/args";
import { MaritalStatusType } from "../types";
import { MaritalStatusService } from "../../services";

const MaritalStatusQuery = {
  type: MaritalStatusType,
  description: "This API returns a marital status data by given id.",
  args: {
    id: {
      type: GraphQLID,
      description: "The global identifier of a marital status to be used" +
        " in all external references to a marital status (STVMRTL)"
    }
  },
  resolve: (root, args, context) =>
    new MaritalStatusService(context).load(args.id)
};

const MaritalStatusesQuery = {
  type: new GraphQLList(MaritalStatusType),
  description: "Provides the list of marital statuses.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    sort: { type: SortByCodeOrTitle },
    order: { type: OrderAscDescArg }
  },
  resolve: (root, args, context) => new MaritalStatusService(context).list(args)
};

export { MaritalStatusQuery, MaritalStatusesQuery };
