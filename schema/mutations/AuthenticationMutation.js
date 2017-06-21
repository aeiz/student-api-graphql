import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLEnumType,
  GraphQLNonNull
} from "graphql";

import { AuthenticationTokenType } from "../types";
import { AuthenticationService } from "../../services";

const createAuthenticationToken = {
  type: AuthenticationTokenType,
  description: "This mutation allows you to authenticate and receive a JWT" +
    " token to be used on subsequent requests.",
  args: {
    username: { type: GraphQLString, description: "Username" },
    password: { type: GraphQLString, description: "Password" }
  },
  resolve: (root, args, context) =>
    new AuthenticationService(context).login(args)
};

export { createAuthenticationToken };
