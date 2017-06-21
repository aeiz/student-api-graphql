import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} from "graphql";

import { AddressType, CredentialType, EmailType, PhoneType, RoleType } from ".";
import { AddressService } from "../../services";

const OrganizationType = new GraphQLObjectType({
  name: "Organization",
  description: "Organization",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of the organization."
    },
    title: {
      type: GraphQLString,
      description: "The full name of the organization."
    },
    description: {
      type: GraphQLString,
      description: "The description of the organization."
    },
    roles: {
      type: new GraphQLList(RoleType),
      description: "List of Roles"
    },
    credentials: {
      type: new GraphQLList(CredentialType),
      description: "List of Credentials"
    },
    addresses: {
      type: new GraphQLList(AddressType),
      description: "List of Addresses",
      resolve: (root, args, context) =>
        new AddressService(context).loadMany(
          (root.addresses || Array()).map(function(address) {
            return address.id;
          })
        )
    },
    phones: {
      type: new GraphQLList(PhoneType),
      description: "List of Phones"
    },
    emails: {
      type: new GraphQLList(EmailType),
      description: "List of Email Addresses"
    }
  })
});

export { OrganizationType };
