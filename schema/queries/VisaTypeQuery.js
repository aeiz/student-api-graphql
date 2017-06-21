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
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 },
    sort: { type: SortByCodeOrTitle },
    order: { type: OrderAscDescArg }
  },
  resolve: (root, args, context) => new VisaTypeService(context).list(args)
};

export { VisaTypeQuery, VisaTypesQuery };
