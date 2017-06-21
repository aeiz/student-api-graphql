import {
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLEnumType
} from "graphql";
import { OrderAscDescArg, SortByCodeOrTitle } from "../types/args";
import { VisaTypeType } from "../types";
import { VisaTypeService } from "../../services";

const VisaTypeQuery = {
  type: VisaTypeType,
  args: {
    id: { type: GraphQLString }
  },
  resolve: (root, args, context) => new VisaTypeService(context).load(args.id)
};

const VisaTypesQuery = {
  type: new GraphQLList(VisaTypeType),
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    sort: { type: SortByCodeOrTitle },
    order: { type: OrderAscDescArg }
  },
  resolve: (root, args, context) =>
    new VisaTypeService(context).list({
      limit: args.limit,
      offset: args.offset,
      sort: args.sort,
      order: args.order
    })
};

export { VisaTypeQuery, VisaTypesQuery };
