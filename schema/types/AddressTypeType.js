import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const AddressTypeType = new GraphQLObjectType({
  name: "AddressType",
  description: "Address Type",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A globally unique identifier of an address type."
    },
    code: {
      type: GraphQLString,
      description: "The generally unique code for an address type (STVATYP_CODE)."
    },
    title: {
      type: GraphQLString,
      description: "The full name of an address type (STVATYP_DESC)."
    },
    addressType: {
      type: GraphQLString,
      description: "A mapping to a standard type for the address type."
    }
  })
});

export { AddressTypeType };
