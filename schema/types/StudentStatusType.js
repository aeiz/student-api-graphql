import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const StudentStatusType = new GraphQLObjectType({
  name: "StudentStatus",
  description: "Student Status",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A global identifier of a student status(STVSTST_GUID)."
    },
    code: {
      type: GraphQLString,
      description: "A code that identifies a student status(STVSTST_CODE)."
    },
    title: {
      type: GraphQLString,
      description: "The full name of a student status(STVSTST_DESC)."
    }
  })
});

export { StudentStatusType };
