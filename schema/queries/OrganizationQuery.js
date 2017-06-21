import { GraphQLID, GraphQLList, GraphQLInt, GraphQLEnumType } from "graphql";
import { OrganizationType } from "../types";
import { OrganizationService } from "../../services";

const OrganizationQuery = {
  type: OrganizationType,
  description: "This API returns an organization data by given ID from" +
    " SPRIDEN.",
  args: {
    id: {
      type: GraphQLID,
      description: "The global identifier of the organization."
    }
  },
  resolve: (root, args, context) =>
    new OrganizationService(context).load(args.id)
};

const OrganizationsQuery = {
  type: new GraphQLList(OrganizationType),
  description: "Retrieves the list of all non-person records from SPRIDEN.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 },
    role: {
      type: new GraphQLEnumType({
        name: "OrganizationsRoleArgEnumVendor",
        description: "Allowed values for role parameter",
        values: {
          vendor: { value: "vendor" }
        }
      })
    }
  },
  resolve: (root, args, context) => new OrganizationService(context).list(args)
};

export { OrganizationQuery, OrganizationsQuery };
