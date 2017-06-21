import {
  GraphQLID,
  GraphQLList,
  GraphQLInt,
  GraphQLEnumType
} from "graphql";
import { OrderAscDescArg, SortByCodeOrTitle } from "../types/args";
import { StudentStatusType } from "../types";
import { StudentStatusService } from "../../services";

const StudentStatusQuery = {
  type: StudentStatusType,
  description: "Returns the student status resource for a given ID.",
  args: {
    id: { type: GraphQLID }
  },
  resolve: (root, args, context) =>
    new StudentStatusService(context).load(args.id)
};

const StudentStatusesQuery = {
  type: new GraphQLList(StudentStatusType),
  description: "Provide the list of student statuses.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    sort: { type: SortByCodeOrTitle },
    order: { type: OrderAscDescArg }
  },
  resolve: (root, args, context) => new StudentStatusService(context).list(args)
};

export { StudentStatusQuery, StudentStatusesQuery };
