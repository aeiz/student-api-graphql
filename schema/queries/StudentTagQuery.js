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
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    sort: { type: SortByCodeOrTitle },
    order: { type: OrderAscDescArg }
  },
  resolve: (root, args, context) => new StudentTagService(context).list(args)
};

export { StudentTagQuery, StudentTagsQuery };
