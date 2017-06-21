import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { CampusOrganizationType } from "../types";
import { CampusOrganizationService } from "../../services";

const CampusOrganizationQuery = {
  type: CampusOrganizationType,
  args: {
    id: {
      type: GraphQLID,
      description: "The global identifier of the campus organizations" +
        " resource (STVACTC and STVCOMT)"
    }
  },
  resolve: (root, args, context) =>
    new CampusOrganizationService(context).load(args.id)
};

const CampusOrganizationsQuery = {
  type: new GraphQLList(CampusOrganizationType),
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt }
  },
  resolve: (root, args, context) =>
    new CampusOrganizationService(context).list(args)
};

export { CampusOrganizationQuery, CampusOrganizationsQuery };
