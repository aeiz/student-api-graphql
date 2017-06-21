import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { OrderAscDescArg, SortByCodeOrTitle } from "../types/args";
import { AcademicStandingType } from "../types";
import { AcademicStandingService } from "../../services";

const AcademicStandingQuery = {
  type: AcademicStandingType,
  description: "Returns the academic standing resource for a given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "A globally unique identifier of the academic standing."
    }
  },
  resolve: (root, args, context) =>
    new AcademicStandingService(context).load(args.id)
};

const AcademicStandingsQuery = {
  type: new GraphQLList(AcademicStandingType),
  description: "Retrieves the list of all academic standings.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 },
    sort: { type: SortByCodeOrTitle, defaultValue: "code" },
    order: { type: OrderAscDescArg, defaultValue: "asc" }
  },
  resolve: (root, args, context) =>
    new AcademicStandingService(context).list(args)
};

export { AcademicStandingQuery, AcademicStandingsQuery };
