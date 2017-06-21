import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { InstructorStaffTypeType } from "../types";
import { InstructorStaffTypeService } from "../../services";

const InstructorStaffTypeQuery = {
  type: InstructorStaffTypeType,
  description: "Provide an instructor staff type record for the given id.",
  args: {
    id: {
      type: GraphQLID,
      description: "A global identifier of an instructor staff type record."
    }
  },
  resolve: (root, args, context) =>
    new InstructorStaffTypeService(context).load(args.id)
};

const InstructorStaffTypesQuery = {
  type: new GraphQLList(InstructorStaffTypeType),
  description: "Provide the list of instructor staff types.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt }
  },
  resolve: (root, args, context) =>
    new InstructorStaffTypeService(context).list(args)
};

export { InstructorStaffTypeQuery, InstructorStaffTypesQuery };
