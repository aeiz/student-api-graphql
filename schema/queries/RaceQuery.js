import {
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLEnumType
} from "graphql";
import { RaceType } from "../types";
import { RaceService } from "../../services";

const RaceQuery = {
  type: RaceType,
  description: "This API returns race data by given ID",
  args: {
    id: {
      type: GraphQLString,
      description: "The global identifier of a race to be used in all" +
        " external references to a race."
    }
  },
  resolve: (root, args, context) => new RaceService(context).load(args.id)
};

const RacesQuery = {
  type: new GraphQLList(RaceType),
  description: "Provides the list of races.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 }
  },
  resolve: (root, args, context) => new RaceService(context).list(args)
};

export { RaceQuery, RacesQuery };
