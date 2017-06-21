import { GraphQLString, GraphQLList, GraphQLInt } from "graphql";
import { SectionRegistrationStatusType } from "../types";
import { SectionRegistrationStatusService } from "../../services";

const SectionRegistrationStatusQuery = {
  type: SectionRegistrationStatusType,
  description: "Returns the section registration status resource for a" +
    " given ID.",
  args: {
    id: { type: GraphQLString }
  },
  resolve: (root, args, context) =>
    new SectionRegistrationStatusService(context).load(args.id)
};

const SectionRegistrationStatusesQuery = {
  type: new GraphQLList(SectionRegistrationStatusType),
  description: "Provide the list of section registration statuses.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt }
  },
  resolve: (root, args, context) =>
    new SectionRegistrationStatusService(context).list(args)
};

export { SectionRegistrationStatusQuery, SectionRegistrationStatusesQuery };
