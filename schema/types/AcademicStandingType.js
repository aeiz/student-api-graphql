import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const AcademicStandingType = new GraphQLObjectType({
  name: "AcademicStandingType",
  description: "Academic Standing",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A global identifier of a academic standing (STVASTD_GUID)."
    },
    code: {
      type: GraphQLString,
      description: "A code that identifies a academic standing (STVASTD_CODE)."
    },
    title: {
      type: GraphQLString,
      description: "The full name of a academic standing (STVASTD_DESC)."
    }
  })
});

export { AcademicStandingType };
