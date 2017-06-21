import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean
} from "graphql";

import { SubjectType } from ".";

import { SubjectService } from "../../services";

const CourseType = new GraphQLObjectType({
  name: "Course",
  description: "Course",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "Globally-unique identifier of the course",
      type: GraphQLString
    },
    number: {
      type: GraphQLString,
      description: "Course number"
    },
    title: {
      type: GraphQLString,
      description: "Course title"
    },
    schedulingStartOn: {
      type: GraphQLString,
      description: "The starting date at which a Course is avalaible to have" +
        " Sections scheduled to be taken. When combined with the scheduling" +
        " ending date, defines the time period a Course is available for" +
        " scheduling"
    },
    schedulingEndOn: {
      type: GraphQLString,
      description: "The ending date at which a Course is no longer available" +
        "  to have Sections scheduled to be taken. When combined with the" +
        " scheduling start date, defines the time period a Course is" +
        " available for scheduling"
    },
    subjectId: {
      type: GraphQLString,
      description: "Globally-unique identifier of subject (STVSUBJ)",
      resolve: (root, args, context) => root.subject.id
    },
    subject: {
      type: SubjectType,
      description: "Subject",
      resolve: (root, args, context) =>
        new SubjectService(context).load(root.subject.id)
    }
    // TODO: owningInstitutionUnits
    // TODO: academicLevels
    // TODO: gradeSchemes
    // TODO: instructionalMethods
    // TODO: credits
  })
});

export { CourseType };
