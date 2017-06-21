import {
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLEnumType
} from "graphql";
import { OrderAscDescArg, SortByCodeOrTitle } from "../types/args";
import { StudentCohortType } from "../types";
import { StudentCohortService } from "../../services";

const StudentCohortQuery = {
  type: StudentCohortType,
  description: "Returns the student cohort resource for a given ID.",
  args: {
    id: { type: GraphQLString }
  },
  resolve: (root, args, context) =>
    new StudentCohortService(context).load(args.id)
};

const StudentCohortsQuery = {
  type: new GraphQLList(StudentCohortType),
  description: "Provide the list of student cohorts.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    sort: { type: SortByCodeOrTitle },
    order: { type: OrderAscDescArg }
  },
  resolve: (root, args, context) => new StudentCohortService(context).list(args)
};

export { StudentCohortQuery, StudentCohortsQuery };
