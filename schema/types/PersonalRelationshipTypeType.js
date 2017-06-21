import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const PersonalRelationshipTypeType = new GraphQLObjectType({
  name: "PersonalRelationshipType",
  description: "Personal Relationship Type",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of the personal relationship types" +
        " resource"
    },
    title: {
      type: GraphQLString,
      description: "The full name of the personal relationship" +
        " type(STVRELT_DESC)."
    },
    description: {
      type: GraphQLString,
      description: "The description of the personal relationship type" +
        " (N/A in Banner)."
    },
    relationshipType: {
      type: GraphQLString,
      description: "The type of relationships between two people." +
        " Enumeration field and for the list of enumerations supported" +
        " please refer the schema"
    },
    code: {
      type: GraphQLString,
      description: "The code that identifies the personal relationship" +
        " type(STVRELT_CODE)."
    }
  })
});

export { PersonalRelationshipTypeType };
