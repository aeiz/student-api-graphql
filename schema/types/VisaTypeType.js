import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const VisaTypeType = new GraphQLObjectType({
  name: "VisaType",
  description: "Visa Type",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The globally unique identifier of a visa type"
    },
    category: {
      type: GraphQLString,
      description: "A global category of visa types (enum values- 'immigrant', 'nonImmigrant')"
    },
    code: {
      type: GraphQLString,
      description: "The code that identifies a visa type (e.g. 'H1')"
    },
    title: {
      type: GraphQLString,
      description: "The full name of a visa type (e.g. 'Special')"
    }
  })
});

export { VisaTypeType };
