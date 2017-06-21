import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const StudentTypeType = new GraphQLObjectType({
  name: "StudentType",
  description: "Student Type",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A global identifier of a student type(STVSTYP_GUID)."
    },
    code: {
      type: GraphQLString,
      description: "A code that identifies a student type(STVSTYP_CODE)."
    },
    title: {
      type: GraphQLString,
      description: "The full name of a student type(STVSTYP_DESC)."
    }
  })
});

export { StudentTypeType };
