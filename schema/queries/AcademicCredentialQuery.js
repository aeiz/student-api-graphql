import { GraphQLID, GraphQLList, GraphQLInt, GraphQLString } from "graphql";
import { OrderAscDescArg, SortByTypeOrAbbreviation } from "../types/args";
import { AcademicCredentialType } from "../types";
import { AcademicCredentialService } from "../../services";

const AcademicCredentialQuery = {
  type: AcademicCredentialType,
  description: "This API returns the details of a specific academic" +
    " credential by the given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "A global identifier for an academic degree."
    }
  },
  resolve: (root, args, context) =>
    new AcademicCredentialService(context).load(args.id)
};

const AcademicCredentialsQuery = {
  type: new GraphQLList(AcademicCredentialType),
  description: "Provides the list of all credentials.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 },
    sort: { type: SortByTypeOrAbbreviation },
    order: { type: OrderAscDescArg },
    type: { type: GraphQLString }
  },
  resolve: (root, args, context) =>
    new AcademicCredentialService(context).list(args)
};

export { AcademicCredentialQuery, AcademicCredentialsQuery };
