import { GraphQLID, GraphQLList, GraphQLInt, GraphQLString } from "graphql";
import { OrderAscDescArg, SortByTypeOrAbbreviation } from "../types/args";
import { AcademicDisciplineType } from "../types";
import { AcademicDisciplineService } from "../../services";

const AcademicDisciplineQuery = {
  type: AcademicDisciplineType,
  description: "This API returns the details of a specific academic" +
    " discipline by the given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "A global identifier for an academic discipline."
    }
  },
  resolve: (root, args, context) =>
    new AcademicDisciplineService(context).load(args.id)
};

const AcademicDisciplinesQuery = {
  type: new GraphQLList(AcademicDisciplineType),
  description: "Provides the list of all disciplines.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500},
    offset: { type: GraphQLInt, defaultValue: 0 },
    sort: { type: SortByTypeOrAbbreviation },
    order: { type: OrderAscDescArg },
    type: { type: GraphQLString }
  },
  resolve: (root, args, context) =>
    new AcademicDisciplineService(context).list(args)
};

export { AcademicDisciplineQuery, AcademicDisciplinesQuery };
