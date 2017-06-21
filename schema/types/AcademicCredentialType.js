import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const AcademicCredentialType = new GraphQLObjectType({
  name: "AcademicCredential",
  description: "Academic Credential",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A global identifier for an academic degree."
    },
    abbreviation: {
      type: GraphQLString,
      description: "An abbreviation used to identify a degree (STVDEGC)."
    },
    title: {
      type: GraphQLString,
      description: "The full name of an academic degree."
    },
    type: {
      type: GraphQLString,
      description: "The type of a degree such as 'degree', 'honorary'," +
        " 'diploma', 'certificate' (GORSDAV)."
    },
    description: {
      type: GraphQLString,
      description: "A full description of an academic degree (GORSDAV)."
    }
  })
});

export { AcademicCredentialType };
