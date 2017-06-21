import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const InstructionalPlatformType = new GraphQLObjectType({
  name: "InstructionalPlatform",
  description: "Instructional Platform",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A global identifier of an instructional platform to be" +
        " used in all external references(GORINTG)."
    },
    code: {
      type: GraphQLString,
      description: "Human readable code that identifies a technology platform."
    },
    title: {
      type: GraphQLString,
      description: "The full name of a technology platform."
    }
  })
});

export { InstructionalPlatformType };
