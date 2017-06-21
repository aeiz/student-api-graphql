import { GraphQLObjectType, GraphQLString } from "graphql";

const AboutType = new GraphQLObjectType({
  name: "About",
  description: "About the API",
  fields: () => ({
    applicationName: { type: GraphQLString },
    applicationVersion: { type: GraphQLString },
    name: { type: GraphQLString },
    version: { type: GraphQLString }
  })
});

export { AboutType };
