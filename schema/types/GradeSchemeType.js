import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

import { AcademicLevelType, GradeModeType } from ".";
import { AcademicLevelService, GradeModeService } from "../../services";

const GradeSchemeType = new GraphQLObjectType({
  name: "GradeScheme",
  description: "Grade Scheme",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A global identifier of a grade scheme (SHRGSCH_GUID)."
    },
    code: {
      type: GraphQLString,
      description: "The code for the grade scheme that may be used a" +
        " reference or for reporting(SHRGSCH_GRADE_SCHEME_CODE)."
    },
    title: {
      type: GraphQLString,
      description: "The full name of a grade scheme."
    },

    academicLevelId: {
      type: GraphQLID,
      description: "The global identifier for the Academic Level.",
      resolve: (root, args, context) => root.academicLevel.id
    },

    academicLevel: {
      type: AcademicLevelType,
      description: "Academic Level",
      resolve: (root, args, context) =>
        new AcademicLevelService(context).load(root.academicLevel.id)
    },

    gradeModeId: {
      type: GraphQLID,
      description: "The global identifier for the Grade Mode.",
      resolve: (root, args, context) => root.gradeMode.id
    },

    gradeMode: {
      type: GradeModeType,
      description: "Grade Mode",
      resolve: (root, args, context) =>
        new GradeModeService(context).load(root.gradeMode.id)
    }
  })
});

export { GradeSchemeType };
