import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { GradeDefinitionType } from "../types";
import { GradeDefinitionService } from "../../services";

const GradeDefinitionQuery = {
  type: GradeDefinitionType,
  description: "This API returns a valid grade by given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "The global identifier of the grade (SHRGDID_GUID)."
    }
  },
  resolve: (root, args, context) =>
    new GradeDefinitionService(context).load(args.id)
};

const GradeDefinitionsQuery = {
  type: new GraphQLList(GradeDefinitionType),
  description: "Provides the list of valid grades.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 }
  },
  resolve: (root, args, context) =>
    new GradeDefinitionService(context).list(args)
};

export { GradeDefinitionQuery, GradeDefinitionsQuery };
