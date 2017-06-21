import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { CampusOrganizationTypeType } from "../types";
import { CampusOrganizationTypeService } from "../../services";

const CampusOrganizationTypeQuery = {
  type: CampusOrganizationTypeType,
  description: "Returns the student activity type for a given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "The global identifier of the campus organization" +
        " types resource"
    }
  },
  resolve: (root, args, context) =>
    new CampusOrganizationTypeService(context).load(args.id)
};

const CampusOrganizationTypesQuery = {
  type: new GraphQLList(CampusOrganizationTypeType),
  description: "Provide the list of student activity types in Banner.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 }
  },
  resolve: (root, args, context) =>
    new CampusOrganizationTypeService(context).list(args)
};

export { CampusOrganizationTypeQuery, CampusOrganizationTypesQuery };
