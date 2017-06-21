import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} from "graphql";

import { AddressType } from ".";
import { AddressService } from "../../services";

const EducationalInstitutionType = new GraphQLObjectType({
  name: "EducationalInstitution",
  description: "Educational Institution",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of the institution"
    },
    title: {
      type: GraphQLString,
      description: "The full name of the institution from tables STVSBGI, GUBINST"
    },
    type: {
      type: GraphQLString,
      description: "The type of the institution"
    },
    homeInstitution: {
      type: GraphQLString,
      description: "Indicates if this is a 'home' or 'external' institution'"
    },
    addresses: {
      type: new GraphQLList(AddressType),
      description: "List of Addresses",
      resolve: (root, args, context) =>
        new AddressService(context).loadMany(
          (root.addresses || Array()).map(address => address.address.id)
        )
    }
  })
});

export { EducationalInstitutionType };
