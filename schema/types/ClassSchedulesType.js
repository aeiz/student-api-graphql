import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";

import { ClassType } from "./ClassType";

const ClassSchedulesType = new GraphQLObjectType({
  name: "ClassSchedules",
  description: "Class Schedules",
  fields: () => ({
    studentCourseRegistrations: {
      type: new GraphQLList(ClassType),
      description: "Lists of Classes"
    },
    totalBill: {
      type: GraphQLString,
      description: "Field that identifies the sum of all bill hours" +
        " registered for the courses in the given term"
    },
    totalCeu: {
      type: GraphQLString,
      description: "Field that identifies the sum of all credit hours" +
        " registered for the continuous educational courses in the given term"
    },
    totalCredit: {
      type: GraphQLString,
      description: "Field that identifies the sum of all credit hours" +
        " registered for the courses other then CEU in the given term"
    }
  })
});

export { ClassSchedulesType };
