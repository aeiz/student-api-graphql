import { GraphQLString, GraphQLList, GraphQLInt } from "graphql";
import { TermType } from "../types";
import { TermService } from "../../services";

const TermQuery = {
  type: TermType,
  args: {
    termCode: {
      type: GraphQLString,
      description: "Code value to identify the term"
    }
  },
  resolve: (root, args, context) => new TermService(context).load(args.termCode)
};

const TermsQuery = {
  type: new GraphQLList(TermType),
  args: {
    // TODO: add searching, sorting, and filter parameters
  },
  resolve: (root, args, context) => new TermService(context).list(args)
};

export { TermQuery, TermsQuery };
