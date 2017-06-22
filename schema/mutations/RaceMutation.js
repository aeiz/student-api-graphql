import { GraphQLID, GraphQLString, GraphQLNonNull } from "graphql";

import { RaceType } from "../types";
import { RaceService } from "../../services";

const RaceArgs = {
  id: {
    type: new GraphQLNonNull(GraphQLID),
    description: "The global identifier of a race to be used in all external" +
      " references to a race."
  },
  code: {
    type: GraphQLString,
    description: "Human readable code that identifies a racial category" +
      " (GORRACE_RACE_CDE)."
  },
  title: {
    type: GraphQLString,
    description: "The full name of a racial category (GORRACE_DESC)."
  },
  racialCategory: {
    type: GraphQLString,
    description: "The name of a higher-level racial grouping of which this" +
      " category is a member."
  }
};

const createRace = {
  type: RaceType,
  description: "This API creates a race record with given data in the request" +
    " body.",
  args: RaceArgs,
  resolve: (root, args, context) => new RaceService(context).create(args)
};

const updateRace = {
  type: RaceType,
  description: "This API allows to update a race record with given id.",
  args: RaceArgs,
  resolve: (root, args, context) => new RaceService(context).update(args)
};

export { createRace, updateRace };
