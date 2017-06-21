import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { CampusInvolvementRoleType } from "../types";
import { CampusInvolvementRoleService } from "../../services";

const CampusInvolvementRoleQuery = {
  type: CampusInvolvementRoleType,
  description: "Returns the committee function for a given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "The global identifier of the campus involvement" +
        " roles resource"
    }
  },
  resolve: (root, args, context) =>
    new CampusInvolvementRoleService(context).load(args.id)
};

const CampusInvolvementRolesQuery = {
  type: new GraphQLList(CampusInvolvementRoleType),
  description: "Provide the list of committee functions in Banner.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 }
  },
  resolve: (root, args, context) =>
    new CampusInvolvementRoleService(context).list(args)
};

export { CampusInvolvementRoleQuery, CampusInvolvementRolesQuery };
