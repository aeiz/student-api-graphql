import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";

import { CredentialType, PersonType } from ".";
import { PersonService } from "../../services";

const PersonCredentialsType = new GraphQLObjectType({
  name: "PersonCredentials",
  description: "Person Credentials",
  fields: () => ({
    credentials: {
      type: new GraphQLList(CredentialType),
      description: "List of Credentials"
    },
    personId: {
      type: GraphQLString,
      description: "A global identifier for person.",
      resolve: (root, args, context) => root.id
    },
    person: {
      type: PersonType,
      description: "Person Record",
      resolve: (root, args, context) => new PersonService(context).load(root.id)
    }
  })
});

export { PersonCredentialsType };
