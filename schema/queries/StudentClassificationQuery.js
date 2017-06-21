import {
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLEnumType
} from "graphql";
import { OrderAscDescArg, SortByCodeOrTitle } from "../types/args";
import { StudentClassificationType } from "../types";
import { StudentClassificationService } from "../../services";

const StudentClassificationQuery = {
  type: StudentClassificationType,
  description: "Returns the student classification resource for a" +
    " given ID.",
  args: {
    id: { type: GraphQLString }
  },
  resolve: (root, args, context) =>
    new StudentClassificationService(context).load(args.id)
};

const StudentClassificationsQuery = {
  type: new GraphQLList(StudentClassificationType),
  description: "Provide the list of student classifications.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 },
    sort: { type: SortByCodeOrTitle, defaultValue: "code" },
    order: { type: OrderAscDescArg, defaultValue: "asc" }
  },
  resolve: (root, args, context) =>
    new StudentClassificationService(context).list(args)
};

export { StudentClassificationQuery, StudentClassificationsQuery };
