import { GraphQLObjectType, GraphQLString } from "graphql";

const AuthenticationTokenType = new GraphQLObjectType({
  name: "AuthenticationToken",
  description: "Authentication Token",
  fields: () => ({
    token: {
      type: GraphQLString,
      description: "JSON Web Token"
    },
    expires: {
      type: GraphQLString,
      description: "Expiration"
    }
  })
});

export { AuthenticationTokenType };
