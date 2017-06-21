import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

import { AcademicYearType } from ".";
import { AcademicPeriodService } from "../../services";

const AcademicPeriodType = new GraphQLObjectType({
  name: "AcademicPeriod",
  description: "Academic Period",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A global identifier of an academic time period."
    },
    type: {
      type: GraphQLString,
      description: "A term within an academic year, such as a Semester.",
      resolve: (root, args, context) => root.category.type
    },
    parentId: {
      type: GraphQLID,
      description: "A global identifier of an academic year.",
      resolve: (root, args, context) =>
        root.category.parent ? root.category.parent.id : null
    },
    parent: {
      type: AcademicPeriodType,
      description: "The academic year in which term occurs.",
      resolve: (root, args, context) =>
        root.category.parent
          ? new AcademicPeriodService(context).load(root.category.parent.id)
          : null
    },
    code: {
      type: GraphQLString,
      description: "A code that identifies an academic time period."
    },
    title: {
      type: GraphQLString,
      description: "The full name of an academic time period" +
        " (e.g. 'Fall 2014')."
    },
    endOn: {
      type: GraphQLString,
      description: "The date at which the period ends"
    },
    startOn: {
      type: GraphQLString,
      startOn: "The date at which the period begins"
    }
  })
});

export { AcademicPeriodType };
