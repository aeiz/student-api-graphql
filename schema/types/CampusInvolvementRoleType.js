import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const CampusInvolvementRoleType = new GraphQLObjectType({
  name: "CampusInvolvementRole",
  description: "Campus Involvement Role",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of the campus involvement" +
        " roles resource"
    },
    title: {
      type: GraphQLString,
      description: "The full name of the campus involvement roles" +
        " (STVCOMF_DESC)."
    },
    code: {
      type: GraphQLString,
      description: "Code of the role of a persons involvement in an" +
        " organization (STVCOMF_CODE)."
    },
    description: {
      type: GraphQLString,
      description: "The description of the campus involvement roles" +
        " (N/A in Banner)."
    }
  })
});

export { CampusInvolvementRoleType };
