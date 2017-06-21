import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

import { PersonType, VisaTypeType } from ".";
import { PersonService, VisaTypeService } from "../../services";

const PersonVisaType = new GraphQLObjectType({
  name: "PersonVisa",
  description: "Person Visa",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A global identifier of a visa record"
    },
    personId: {
      type: GraphQLID,
      description: "The global identifier for the Person to whom the visa" +
        " was issued",
      resolve: (root, args, context) => (root.person ? root.person.id : null)
    },
    person: {
      type: PersonType,
      description: "Person",
      resolve: (root, args, context) =>
        root.person ? new PersonService(context).load(root.person.id) : null
    },
    visaTypeId: {
      type: GraphQLID,
      description: "The global identifier for the type of visa",
      resolve: (root, args, context) => root.visaType.detail.id
    },
    visaType: {
      type: VisaTypeType,
      description: "Visa Type",
      resolve: (root, args, context) =>
        root.visaType.detail
          ? new VisaTypeService(context).load(root.visaType.detail.id)
          : null
    },
    visaCategory: {
      type: GraphQLString,
      description: "A global category of visa types",
      resolve: (root, args, context) => root.visaType.category
    },
    visaId: {
      type: GraphQLString,
      description: "The identifier of the visa"
    },
    status: {
      type: GraphQLString,
      description: "Visa status"
    },
    requestedOn: {
      type: GraphQLString,
      description: "The date when the visa was requested"
    },
    issuedOn: {
      type: GraphQLString,
      description: "The date when the visa was issued"
    },
    expiresOn: {
      type: GraphQLString,
      description: "The visa expiration date"
    }
  })
});

export { PersonVisaType };
