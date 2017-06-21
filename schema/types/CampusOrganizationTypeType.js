import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} from "graphql";

const CampusOrganizationTypeType = new GraphQLObjectType({
  name: "CampusOrganizationType",
  description: "Campus Organization Type",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of the campus organization types" +
        " resource"
    },
    code: {
      type: GraphQLString,
      description: "The code that identifies the campus organization type" +
        " ex: Athletic, Cultural (STVACTP_CODE)."
    },
    title: {
      type: GraphQLString,
      description: "The full name of the campus organization type" +
        " (STVACTP_DESC)."
    },
    description: {
      type: GraphQLString,
      description: "The description of the campus organization type" +
        " (N/A in Banner)."
    }
  })
});

export { CampusOrganizationTypeType };
