import { GraphQLID, GraphQLString, GraphQLNonNull } from "graphql";

import { RestrictionTypeType } from "../types";
import { RestrictionTypeService } from "../../services";

const RestrictionTypeArgs = {
  id: {
    type: new GraphQLNonNull(GraphQLID),
    description: "A globally unique identifier (STVHLDD)"
  },
  abbreviation: {
    type: GraphQLString,
    description: "A shortened or contracted form of a word or phrase, used to" +
      " represent the whole, as Dr. for Doctor. Abbreviations are not" +
      " assumed to be unique."
  },
  title: {
    type: GraphQLString,
    description: "The full name of the restriction class."
  }
};

const createRestrictionType = {
  type: RestrictionTypeType,
  description: "This API creates a restriction type with given data in the" +
    " request body.",
  args: RestrictionTypeArgs,
  resolve: (root, args, context) =>
    new RestrictionTypeService(context).create(args)
};

const updateRestrictionType = {
  type: RestrictionTypeType,
  description: "This API allows to update a restriction-type with given ID.",
  args: RestrictionTypeArgs,
  resolve: (root, args, context) =>
    new RestrictionTypeService(context).update(args)
};

export { createRestrictionType, updateRestrictionType };
