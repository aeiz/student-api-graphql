import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

import { PhoneTypeType } from ".";
import { PhoneTypeService } from "../../services";

const PhoneType = new GraphQLObjectType({
  name: "Phone",
  description: "Phone",
  fields: () => ({
    preference: {
      type: GraphQLString,
      description: "Specifies if the phone is preferred over others of the" +
        " same type."
    },
    countryCallingCode: {
      type: GraphQLString,
      description: "The country calling code of telephone and/or mobile" +
        " device when dialing internationally."
    },
    number: {
      type: GraphQLString,
      description: "The number assigned to the phone."
    },
    extension: {
      type: GraphQLString,
      description: "The extension used to connect to the phone when multiple" +
        " phones share the same primary number."
    },
    phoneType: {
      type: PhoneTypeType,
      description: "Phone Type",
      resolve: (root, args, context) =>
        new PhoneTypeService(context).load(root.type.detail.id)
    },
    phoneTypeType: {
      type: GraphQLID,
      description: "A mapping to a standard type for the phone type.",
      resolve: (root, args, context) => root.type.phoneType
    },
    phoneTypeId: {
      type: GraphQLID,
      description: "The global identifier for the Phone Type.",
      resolve: (root, args, context) => root.type.detail.id
    }
  })
});

export { PhoneType };
