import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

import { GradeSchemeType } from ".";
import { GradeSchemeService } from "../../services";

const GradeDefinitionType = new GraphQLObjectType({
  name: "GradeDefinition",
  description: "Grade Definition",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of the grade (SHRGDID_GUID)."
    },
    type: {
      type: GraphQLString,
      description: "The type of the grade.Valid type is literal.",
      resolve: (root, args, context) => root.grade.type
    },
    value: {
      type: GraphQLString,
      description: "The literal value of the grade (SHRGDID_GRADE).",
      resolve: (root, args, context) => root.grade.value
    },
    schemeId: {
      type: GraphQLID,
      description: "The global identifier for Grade Scheme" +
        " (SHRGDID_GRADE_SCHEME).",
      resolve: (root, args, context) => (root.scheme ? root.scheme.id : null)
    },
    scheme: {
      type: GradeSchemeType,
      description: "Grade Scheme",
      resolve: (root, args, context) =>
        new GradeSchemeService(context).load(root.scheme.id)
    }
  })
});

export { GradeDefinitionType };
