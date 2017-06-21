import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { InstructorCategoryType } from "../types";
import { InstructorCategoryService } from "../../services";

const InstructorCategoryQuery = {
  type: InstructorCategoryType,
  description: "Provide an instructor category record for the given id.",
  args: {
    id: {
      type: GraphQLID,
      description: "A global identifier of an instructor category record."
    }
  },
  resolve: (root, args, context) =>
    new InstructorCategoryService(context).load(args.id)
};

const InstructorCategoriesQuery = {
  type: new GraphQLList(InstructorCategoryType),
  description: "Provide the list of instructor categories.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt }
  },
  resolve: (root, args, context) =>
    new InstructorCategoryService(context).list(args)
};

export { InstructorCategoryQuery, InstructorCategoriesQuery };
