import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { SubjectType } from "../types";
import { OrderAscDescArg, SortByTitleOrAbbreviation } from "../types/args";
import { SubjectService } from "../../services";

const SubjectQuery = {
  type: SubjectType,
  args: {
    id: {
      type: GraphQLID,
      description: "A global identifier of a subject to be used in all" +
        " external references to the subject(STVSUBJ)."
    }
  },
  resolve: (root, args, context) => new SubjectService(context).load(args.id)
};

const SubjectsQuery = {
  type: new GraphQLList(SubjectType),
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 },
    sort: { type: SortByTitleOrAbbreviation },
    order: { type: OrderAscDescArg }
  },
  resolve: (root, args, context) => new SubjectService(context).list(args)
};

export { SubjectQuery, SubjectsQuery };
