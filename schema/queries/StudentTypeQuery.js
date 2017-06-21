import {
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLEnumType
} from "graphql";
import { OrderAscDescArg, SortByCodeOrTitle } from "../types/args";
import { StudentTypeType } from "../types";
import { StudentTypeService } from "../../services";

const StudentTypeQuery = {
  type: StudentTypeType,
  description: "Returns the student type resource for a given ID.",
  args: {
    id: { type: GraphQLString }
  },
  resolve: (root, args, context) =>
    new StudentTypeService(context).load(args.id)
};

const StudentTypesQuery = {
  type: new GraphQLList(StudentTypeType),
  description: "Provide the list of student types.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    sort: { type: SortByCodeOrTitle },
    order: { type: OrderAscDescArg }
  },
  resolve: (root, args, context) => new StudentTypeService(context).list(args)
};

export { StudentTypeQuery, StudentTypesQuery };
