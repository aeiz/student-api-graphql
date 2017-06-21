import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const StudentTagType = new GraphQLObjectType({
  name: "StudentTag",
  description: "Student Tag",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A global identifier of a student attribute(STVATTS_GUID)."
    },
    code: {
      type: GraphQLString,
      description: "A code that identifies a student attribute(STVATTS_CODE)."
    },
    title: {
      type: GraphQLString,
      description: "The full name of a student attribute(STVATTS_DESC)."
    }
  })
});

export { StudentTagType };
