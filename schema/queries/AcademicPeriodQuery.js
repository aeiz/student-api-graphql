import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { OrderAscDescArg, SortByCodeOrTitle } from "../types/args";
import { AcademicPeriodType } from "../types";
import { AcademicPeriodService } from "../../services";

const AcademicPeriodQuery = {
  type: AcademicPeriodType,
  description: "This API returns an Academic Period data by the given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "A globally unique identifier of the academic period."
    }
  },
  resolve: (root, args, context) =>
    new AcademicPeriodService(context).load(args.id)
};

const AcademicPeriodsQuery = {
  type: new GraphQLList(AcademicPeriodType),
  description: "Retrieves the list of all Academic Periods.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 },
    sort: { type: SortByCodeOrTitle },
    order: { type: OrderAscDescArg }
    // TODO: Implement filter parameters (code and category)
  },
  resolve: (root, args, context) =>
    new AcademicPeriodService(context).list(args)
};

export { AcademicPeriodQuery, AcademicPeriodsQuery };
