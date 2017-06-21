import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { SortByCodeOrTitle, OrderAscDescArg } from "../types/args";
import { InstructionalPlatformType } from "../types";
import { InstructionalPlatformService } from "../../services";

const InstructionalPlatformQuery = {
  type: InstructionalPlatformType,
  description: "This API returns an instructional platform data by" +
    " given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "A global identifier of an instructional method to be used" +
        " in all external references."
    }
  },
  resolve: (root, args, context) =>
    new InstructionalPlatformService(context).load(args.id)
};

const InstructionalPlatformsQuery = {
  type: new GraphQLList(InstructionalPlatformType),
  description: "The instructional platform determines system that will" +
    " provide learning platform for students. This API retrieves list of" +
    " instructional platform data from integration partner code table. The" +
    " instructional platform retrieves the title, abbreviation and" +
    " description details. The retrieved details are incorporated in the" +
    " section API in which GUID, title, and abbreviation are seen.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    sort: { type: SortByCodeOrTitle },
    order: { type: OrderAscDescArg }
  },
  resolve: (root, args, context) =>
    new InstructionalPlatformService(context).list(args)
};

export { InstructionalPlatformQuery, InstructionalPlatformsQuery };
