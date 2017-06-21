import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const ResidencyTypeType = new GraphQLObjectType({
  name: "ResidencyType",
  description: "Residency Type",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A global identifier of a residency(STVRESD_GUID)."
    },
    code: {
      type: GraphQLString,
      description: "A code that identifies a residency(STVRESD_CODE)."
    },
    title: {
      type: GraphQLString,
      description: "The full name of a residency(STVRESD_DESC)."
    }
  })
});

export { ResidencyTypeType };
