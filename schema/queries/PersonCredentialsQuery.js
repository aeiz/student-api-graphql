import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { PersonCredentialsType } from "../types";
import { PersonCredentialService } from "../../services";

const PersonCredentialsQuery = {
  type: PersonCredentialsType,
  description: "This API returns a person credentials by given id.",
  args: {
    id: {
      type: GraphQLID,
      description: "A global identifier for person."
    }
  },
  resolve: (root, args, context) =>
    new PersonCredentialService(context).load(args.id)
};

const PersonsCredentialsQuery = {
  type: new GraphQLList(PersonCredentialsType),
  description: "This API provides a list of all persons credentials.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 }
  },
  resolve: (root, args, context) =>
    new PersonCredentialService(context).list(args)
};

export { PersonCredentialsQuery, PersonsCredentialsQuery };
