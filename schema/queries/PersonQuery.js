import { GraphQLID, GraphQLList, GraphQLInt, GraphQLString } from "graphql";
import { PersonType } from "../types";
import { OrderAscDescArg } from "../types/args";
import { PersonService } from "../../services";

const PersonQuery = {
  type: PersonType,
  description: "This API returns a person data by given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "A global identifier of a person."
    }
  },
  resolve: (root, args, context) => new PersonService(context).load(args.id)
};

const PersonsQuery = {
  type: new GraphQLList(PersonType),
  description: "Retrieves the list of all persons.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 },
    sort: { type: GraphQLString, defaultValue: "lastName" },
    order: { type: OrderAscDescArg, defaultValue: "asc" },
    role: { type: GraphQLString },
    personFilter: { type: GraphQLID },
    credentialType: { type: GraphQLString },
    credentialValue: { type: GraphQLString }
  },
  resolve: (root, args, context) => new PersonService(context).list(args)
};

export { PersonQuery, PersonsQuery };
