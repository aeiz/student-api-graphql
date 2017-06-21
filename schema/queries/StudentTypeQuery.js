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
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 },
    sort: { type: SortByCodeOrTitle, defaultValue: "code" },
    order: { type: OrderAscDescArg, defaultValue: "asc" }
  },
  resolve: (root, args, context) => new StudentTypeService(context).list(args)
};

export { StudentTypeQuery, StudentTypesQuery };
