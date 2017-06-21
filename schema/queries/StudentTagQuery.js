import {
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLEnumType
} from "graphql";
import { OrderAscDescArg, SortByCodeOrTitle } from "../types/args";
import { StudentTagType } from "../types";
import { StudentTagService } from "../../services";

const StudentTagQuery = {
  type: StudentTagType,
  description: "Returns the student tag resource for a given ID.",
  args: {
    id: { type: GraphQLString }
  },
  resolve: (root, args, context) => new StudentTagService(context).load(args.id)
};

const StudentTagsQuery = {
  type: new GraphQLList(StudentTagType),
  description: "Provide the list of student tags.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 },
    sort: { type: SortByCodeOrTitle, defaultValue: "code" },
    order: { type: OrderAscDescArg, defaultValue: "asc" }
  },
  resolve: (root, args, context) => new StudentTagService(context).list(args)
};

export { StudentTagQuery, StudentTagsQuery };
