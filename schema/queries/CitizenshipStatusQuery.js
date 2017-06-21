import { GraphQLID, GraphQLList, GraphQLInt, GraphQLString } from "graphql";
import { SortByCodeOrTitle, OrderAscDescArg } from "../types/args";
import { CitizenshipStatusType } from "../types";
import { CitizenshipStatusService } from "../../services";

const CitizenshipStatusQuery = {
  type: CitizenshipStatusType,
  description: "This API returns a citizenship status data by given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "The globally unique identifier of a citizenship status"
    }
  },
  resolve: (root, args, context) =>
    new CitizenshipStatusService(context).load(args.id)
};

const CitizenshipStatusesQuery = {
  type: new GraphQLList(CitizenshipStatusType),
  description: "Provides the list of Citizenship Statuses.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    sort: { type: SortByCodeOrTitle },
    order: { type: OrderAscDescArg },
    type: { type: GraphQLString }
  },
  resolve: (root, args, context) =>
    new CitizenshipStatusService(context).list(args)
};

export { CitizenshipStatusQuery, CitizenshipStatusesQuery };
