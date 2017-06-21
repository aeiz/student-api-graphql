import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const SiteType = new GraphQLObjectType({
  name: "Site",
  description: "Site",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A globally unique identifier(STVCAMP)"
    },
    code: {
      type: GraphQLString,
      description: "The code that identifies the site."
    },
    title: {
      type: GraphQLString,
      description: "The full name of the site."
    }
  })
});

export { SiteType };
