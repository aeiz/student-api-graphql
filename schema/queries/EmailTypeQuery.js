import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { EmailTypeType } from "../types";
import { EmailTypeService } from "../../services";

const EmailTypeQuery = {
  type: EmailTypeType,
  description: "This API returns a email type data by given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "A globally unique identifier of an email type."
    }
  },
  resolve: (root, args, context) => new EmailTypeService(context).load(args.id)
};

const EmailTypesQuery = {
  type: new GraphQLList(EmailTypeType),
  description: "Provides the list of email types.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt }
  },
  resolve: (root, args, context) => new EmailTypeService(context).list({})
};

export { EmailTypeQuery, EmailTypesQuery };
