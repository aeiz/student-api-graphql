import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const PhoneTypeType = new GraphQLObjectType({
  name: "PhoneType",
  description: "Phone Type",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A globally unique identifier of a type of phone."
    },
    code: {
      type: GraphQLString,
      description: "The code that identifies a phone type(STVTELE_CODE)."
    },
    title: {
      type: GraphQLString,
      description: "The full name of a type of phone(STVTELE_DESC)."
    },
    phoneType: {
      type: GraphQLString,
      description: "A mapping to a standard type for the phone type."
    }
  })
});

export { PhoneTypeType };
