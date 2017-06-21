import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { AddressTypeType } from "../types";
import { AddressTypeService } from "../../services";

const AddressTypeQuery = {
  type: AddressTypeType,
  description: "This API returns a address type data for a given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "A globally unique identifier of an address type."
    }
  },
  resolve: (root, args, context) =>
    new AddressTypeService(context).load(args.id)
};

const AddressTypesQuery = {
  type: new GraphQLList(AddressTypeType),
  description: "Provides the list of address types.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt }
  },
  resolve: (root, args, context) => new AddressTypeService(context).list(args)
};

export { AddressTypeQuery, AddressTypesQuery };
