import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const ReligionType = new GraphQLObjectType({
  name: "Religion",
  description: "Religion",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of the religion."
    },
    code: {
      type: GraphQLString,
      description: "The code assigned to the religion(STVRELG_CODE)."
    },
    title: {
      type: GraphQLString,
      description: "The full name of the religion(STVRELG_DESC)."
    }
  })
});

export { ReligionType };
