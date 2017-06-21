import { GraphQLObjectType, GraphQLString } from "graphql";

const RoleType = new GraphQLObjectType({
  name: "Role",
  description: "Role Information",
  fields: () => ({
    role: {
      type: GraphQLString,
      description: "The actions and activities assigned to, required of, or" +
        " expected of a person. For example, the roles of 'Faculty' or" +
        " 'Student'."
    },
    startOn: {
      type: GraphQLString,
      description: "The date when a person starts filling a role."
    },
    endOn: {
      type: GraphQLString,
      description: "The date when a person stops filling a role."
    }
  })
});

export { RoleType };
