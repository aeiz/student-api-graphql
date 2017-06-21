import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { OrderAscDescArg, SortByCodeOrTitle } from "../types/args";
import { AcademicPeriodEnrollmentStatusType } from "../types";
import { AcademicPeriodEnrollmentStatusService } from "../../services";

const AcademicPeriodEnrollmentStatusQuery = {
  type: AcademicPeriodEnrollmentStatusType,
  description: "Returns the academic period enrollment status" +
    " resource for a given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "A globally unique identifier of the academic" +
        " period enrollment" +
        " status."
    }
  },
  resolve: (root, args, context) =>
    new AcademicPeriodEnrollmentStatusService(context).load(args.id)
};

const AcademicPeriodEnrollmentStatusesQuery = {
  type: new GraphQLList(AcademicPeriodEnrollmentStatusType),
  description: "Provide the list of academic period enrollment statuses.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 },
    sort: { type: SortByCodeOrTitle },
    order: { type: OrderAscDescArg }
  },
  resolve: (root, args, context) =>
    new AcademicPeriodEnrollmentStatusService(context).list(args)
};

export {
  AcademicPeriodEnrollmentStatusQuery,
  AcademicPeriodEnrollmentStatusesQuery
};
