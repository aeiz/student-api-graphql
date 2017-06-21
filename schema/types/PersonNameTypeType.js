import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const PersonNameTypeType = new GraphQLObjectType({
  name: "PersonNameType",
  description: "Person Name Type",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A global identifier of a person name type."
    },
    code: {
      type: GraphQLString,
      description: "The code of the person name type(GTVNTYP_CODE)."
    },
    title: {
      type: GraphQLString,
      description: "The full name of the person name type(GTVNTYP_DESC)."
    },
    category: {
      type: GraphQLString,
      description: "The global category of person name types such as " +
        "'personal', 'birth' and 'legal'."
    }
  })
});

export { PersonNameTypeType };
