import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";

const StudentHoldType = new GraphQLObjectType({
  name: "StudentHold",
  description: "StudentHold",
  fields: () => ({
    amountOwed: {
      type: GraphQLString,
      description: "Field that identifies a dollar amount associated with hold"
    },
    fromDate: {
      type: GraphQLString,
      description: "Field that identifies the effective begin date of hold"
    },
    holdTypeCode: {
      type: GraphQLString,
      description: "Field that identifies the type of hold on student record"
    },
    holdTypeDescription: {
      type: GraphQLString,
      description: "Description of the hold type code"
    },
    originatorCode: {
      type: GraphQLString,
      description: "Field that identifies person/office who authorized hold" +
        " status"
    },
    originatorDescription: {
      type: GraphQLString,
      description: "Description of the hold originator code"
    },
    processAffectedDescription: {
      type: new GraphQLList(GraphQLString),
      description: "Field that identifies all the processes affected due to" +
        " hold"
    },
    reason: {
      type: GraphQLString,
      description: "Free format field which identifies the reason hold was" +
        " placed"
    },
    toDate: {
      type: GraphQLString,
      description: "Field that identifies the end date hold expires"
    }
  })
});

export { StudentHoldType };
