import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
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
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 },
    sort: { type: SortByCodeOrTitle, defaultValue: "code" },
    order: { type: OrderAscDescArg, defaultValue: "asc" }
  },
  resolve: (root, args, context) => new StudentStatusService(context).list(args)
};

export { StudentStatusQuery, StudentStatusesQuery };
