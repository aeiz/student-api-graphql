import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

import { EmailTypeType } from ".";
import { EmailTypeService } from "../../services";

const EmailType = new GraphQLObjectType({
  name: "Email",
  description: "Email",
  fields: () => ({
    address: {
      type: GraphQLString,
      description: "An email address for the person."
    },
    preference: {
      type: GraphQLString,
      description: "Specifies if the email is preferred over others" +
        " of the same type or overall. Only one email should be set" +
        " to primary for a person."
    },
    emailType: {
      type: EmailTypeType,
      description: "Email Type",
      resolve: (root, args, context) =>
        new EmailTypeService(context).load(root.type.detail.id)
    },
    emailTypeId: {
      type: GraphQLID,
      description: "The global identifier for the Email Type.",
      resolve: (root, args, context) => root.type.detail.id
    },
    emailTypeCode: {
      type: GraphQLString,
      description: "A mapping to a standard type for the email type.",
      resolve: (root, args, context) => root.type.emailType
    }
  })
});

export { EmailType };
