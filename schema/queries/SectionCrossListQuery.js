import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { SectionCrossListType } from "../types";
import { SectionCrossListService } from "../../services";

const SectionCrossListQuery = {
  type: SectionCrossListType,
  description: "This API returns the details of a section crosslist area by" +
    " the given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "The global identifier of the Section Crosslists(GORGUID)."
    }
  },
  resolve: (root, args, context) =>
    new SectionCrossListService(context).load(args.id)
};

const SectionCrossListsQuery = {
  type: new GraphQLList(SectionCrossListType),
  description: "Provides the list of all section crosslists.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    section: { type: GraphQLID }
  },
  resolve: (root, args, context) =>
    new SectionCrossListService(context).list(args)
};

export { SectionCrossListQuery, SectionCrossListsQuery };
