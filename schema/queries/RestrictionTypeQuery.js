import {
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLEnumType
} from "graphql";
import { OrderAscDescArg } from "../types/args";
import { RestrictionTypeType } from "../types";
import { RestrictionTypeService } from "../../services";

const RestrictionTypeQuery = {
  type: RestrictionTypeType,
  description: "This API returns a restriction type data by given ID.",
  args: {
    id: {
      type: GraphQLString,
      description: "Globally-unique identifier of the restriction type (STVHLDD)"
    }
  },
  resolve: (root, args, context) =>
    new RestrictionTypeService(context).load(args.id)
};

const RestrictionTypesQuery = {
  type: new GraphQLList(RestrictionTypeType),
  description: "Provides the list of restriction types.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    sort: {
      type: new GraphQLEnumType({
        name: "RestrictionTypesSort",
        description: "Allowed values for sort parameter",
        values: {
          abbreviation: { value: "abbreviation" },
          title: { value: "title" }
        }
      })
    },
    order: { type: OrderAscDescArg }
  },
  resolve: (root, args, context) =>
    new RestrictionTypeService(context).list(args)
};

export { RestrictionTypeQuery, RestrictionTypesQuery };
