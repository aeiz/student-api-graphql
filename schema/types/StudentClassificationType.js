import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const StudentClassificationType = new GraphQLObjectType({
  name: "StudentClassification",
  description: "Student Classification",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A global identifier of a class code(STVCLAS_GUID)."
    },
    code: {
      type: GraphQLString,
      description: "A code that identifies a class code(STVCLAS_CODE)."
    },
    title: {
      type: GraphQLString,
      description: "The full name of a class code(STVCLAS_DESC)."
    }
  })
});

export { StudentClassificationType };
