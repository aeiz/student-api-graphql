import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const CitizenshipStatusType = new GraphQLObjectType({
  name: "CitizenshipStatus",
  description: "Citizenship Status",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The globally unique identifier of a citizenship status"
    },
    category: {
      type: GraphQLString,
      description: "A global category of citizenship statuses" +
        " (enum values- 'citizen', 'nonCitizen')"
    },
    code: {
      type: GraphQLString,
      description: "The code that identifies a citizenship status (e.g. 'UK')"
    },
    title: {
      type: GraphQLString,
      description: "The full name of a citizenship status (e.g. 'UK Citizen')"
    }
  })
});

export { CitizenshipStatusType };
