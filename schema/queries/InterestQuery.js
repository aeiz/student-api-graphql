import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { InterestType } from "../types";
import { InterestService } from "../../services";

const InterestQuery = {
  type: InterestType,
  description: "The API retrieves interest record for a given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "A global identifier of a interest record"
    }
  },
  resolve: (root, args, context) => new InterestService(context).load(args.id)
};

const InterestsQuery = {
  type: new GraphQLList(InterestType),
  description: "Provides the list of interests that can be recorded on a" +
    " person or organization profile.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 }
  },
  resolve: (root, args, context) => new InterestService(context).list(args)
};

export { InterestQuery, InterestsQuery };
