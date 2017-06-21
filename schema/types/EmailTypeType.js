import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const EmailTypeType = new GraphQLObjectType({
  name: "EmailType",
  description: "Email Type",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A globally unique identifier of an email type."
    },
    code: {
      type: GraphQLString,
      description: "The generally unique code of an email type (GTVEMAL_CODE)."
    },
    title: {
      type: GraphQLString,
      description: "The full name of an email type (GTVEMAL_DESC)."
    },
    emailType: {
      type: GraphQLString,
      description: "A mapping to a standard type for the email type."
    }
  })
});

export { EmailTypeType };
