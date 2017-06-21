import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const GradeChangeReasonType = new GraphQLObjectType({
  name: "GradeChangeReason",
  description: "Grade Change Reason",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "Globally-unique identifier of the grade change" +
        " reason (STVGCHG)"
    },
    code: {
      type: GraphQLString,
      description: "The code that identifies the grade change reason" +
        " (e.g. 'OE')"
    },
    title: {
      type: GraphQLString,
      description: "The full name of a grade change reason" +
        " (e.g. 'Original Entry')"
    }
  })
});

export { GradeChangeReasonType };
