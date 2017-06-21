import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const SectionRegistrationStatusType = new GraphQLObjectType({
  name: "SectionRegistrationStatus",
  description: "Section Registration Status",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global unique identifier of the section registration" +
        " statuses resource"
    },
    code: {
      type: GraphQLString,
      description: "The code that identifies the section registration" +
        " status(SYVRSTS_CODE)"
    },
    title: {
      type: GraphQLString,
      description: "The full name of the section registration status" +
        " (SYVRSTS_DESC)"
    },
    headcountStatus: {
      type: GraphQLString,
      description: "If the STVRSTS_INCL_SECT_ENRL field of the registration" +
        " status being processed equals [Y], this value will be [include]" +
        " otherwise [exclude]"
    },
    registrationStatus: {
      type: GraphQLString,
      description: "The status of the registration. Enumeration field." +
        " One of [registered, notRegistered]",
      resolve: (root, args, context) =>
        root.status ? root.status.registrationStatus : null
    },
    sectionRegistrationStatusReason: {
      type: GraphQLString,
      description: "The reason for the registration status. Enumeration" +
        " field. One of [pending, dropped, withdrawn, canceled," +
        " registered]",
      resolve: (root, args, context) =>
        root.status ? root.status.sectionRegistrationStatusReason : null
    }
  })
});

export { SectionRegistrationStatusType };
