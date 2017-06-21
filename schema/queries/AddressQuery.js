import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { AddressType } from "../types";
import { AddressService } from "../../services";

const AddressQuery = {
  type: AddressType,
  description: "This API returns an address record by given id.",
  args: {
    id: {
      type: GraphQLID,
      description: "The global identifier of the Address (SPRADDR, SOBSBGI)"
    }
  },
  resolve: (root, args, context) => new AddressService(context).load(args.id)
};

const AddressesQuery = {
  type: new GraphQLList(AddressType),
  description: "This API returns a list of Addresses information.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, offset: 0 }
  },
  resolve: (root, args, context) => new AddressService(context).list(args)
};

export { AddressQuery, AddressesQuery };
