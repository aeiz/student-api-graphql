import {
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLEnumType
} from "graphql";
import { OrderAscDescArg, SortByCodeOrTitle } from "../types/args";
import { ResidencyTypeType } from "../types";
import { ResidencyTypeService } from "../../services";

const ResidencyTypeQuery = {
  type: ResidencyTypeType,
  description: "Returns the residency type resource for a given ID.",
  args: {
    id: {
      type: GraphQLString,
      description: "A global identifier of a residency(STVRESD_GUID)."
    }
  },
  resolve: (root, args, context) =>
    new ResidencyTypeService(context).load(args.id)
};

const ResidencyTypesQuery = {
  type: new GraphQLList(ResidencyTypeType),
  description: "Provide the list of residency types.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    sort: { type: SortByCodeOrTitle },
    order: { type: OrderAscDescArg }
  },
  resolve: (root, args, context) => new ResidencyTypeService(context).list(args)
};

export { ResidencyTypeQuery, ResidencyTypesQuery };
