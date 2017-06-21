import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const GradeModeType = new GraphQLObjectType({
  name: "GradeMode",
  description: "Grade Mode",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of the grade modes."
    },
    code: {
      type: GraphQLString,
      description: "The code associated with the grade mode(STVGMOD)."
    },
    title: {
      type: GraphQLString,
      description: "The full name of the grade modes."
    }
  })
});

export { GradeModeType };
