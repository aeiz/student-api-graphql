import { GraphQLObjectType, GraphQLString } from "graphql";

const CredentialType = new GraphQLObjectType({
  name: "Credential",
  description: "Credential",
  fields: () => ({
    type: {
      type: GraphQLString,
      description: "The type of credential, such as 'Person ID', " +
        "'Organization ID', 'System ID', etc."
    },
    value: {
      type: GraphQLString,
      description: "The current value of the credential."
    },
    startOn: {
      type: GraphQLString,
      description: "The date when the credential starts being valid."
    },
    endOn: {
      type: GraphQLString,
      description: "The date when the credential stops being valid."
    }
  })
});

export { CredentialType };
