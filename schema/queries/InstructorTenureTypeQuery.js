import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { InstructorTenureTypeType } from "../types";
import { InstructorTenureTypeService } from "../../services";

const InstructorTenureTypeQuery = {
  type: InstructorTenureTypeType,
  description: "Provide an instructor tenure type record for the given id.",
  args: {
    id: {
      type: GraphQLID,
      description: "A global identifier of an instructor tenure type" +
        " record."
    }
  },
  resolve: (root, args, context) =>
    new InstructorTenureTypeService(context).load(args.id)
};

const InstructorTenureTypesQuery = {
  type: new GraphQLList(InstructorTenureTypeType),
  description: "Provide the list of instructor tenure types.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt }
  },
  resolve: (root, args, context) =>
    new InstructorTenureTypeService(context).list(args)
};

export { InstructorTenureTypeQuery, InstructorTenureTypesQuery };
