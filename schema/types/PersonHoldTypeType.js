import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const PersonHoldTypeType = new GraphQLObjectType({
  name: "PersonHoldType",
  description: "Person Hold Type",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of a person hold type."
    },
    code: {
      type: GraphQLString,
      description: "The code of a person hold type(STVHLDD_CODE)."
    },
    title: {
      type: GraphQLString,
      description: "The full name of a person hold type(STVHLDD_DESC)."
    },
    category: {
      type: GraphQLString,
      description: "A global category of person hold type such as" +
        " 'academic', 'administrative', 'disciplinary', 'financial' and" +
        " 'health'. Only 'academic' or 'financial' are displayed."
    }
  })
});

export { PersonHoldTypeType };
