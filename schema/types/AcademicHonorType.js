import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const AcademicHonorType = new GraphQLObjectType({
  name: "AcademicHonor",
  description: "Academic Honor",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A global identifier for an academic honor."
    },
    code: {
      type: GraphQLString,
      description: "A code used to identify a honors" +
        " (STVHONR_CODE and STVHOND_CODE)."
    },
    type: {
      type: GraphQLString,
      description: "The type of an academic honor such as 'award'," +
        " 'distinction'."
    },
    title: {
      type: GraphQLString,
      description: "The full name of an academic honor" +
        " (STVHONR_DESC and STVHOND_DESC)."
    }
  })
});

export { AcademicHonorType };
