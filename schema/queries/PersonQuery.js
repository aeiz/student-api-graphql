import { GraphQLID, GraphQLList, GraphQLInt, GraphQLString } from "graphql";
import { PersonType } from "../types";
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
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    sort: { type: GraphQLString },
    order: { type: GraphQLString },
    role: { type: GraphQLString },
    personFilter: { type: GraphQLString },
    credentialType: { type: GraphQLString },
    credentialValue: { type: GraphQLString }
  },
  resolve: (root, args, context) => new PersonService(context).list(args)
};

export { PersonQuery, PersonsQuery };
