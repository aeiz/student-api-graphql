import { GraphQLID, GraphQLString, GraphQLNonNull } from "graphql";

import { InstructionalMethodType } from "../types";
import { InstructionalMethodService } from "../../services";

const InstructionalMethodArgs = {
  id: {
    type: new GraphQLNonNull(GraphQLID),
    description: "A global identifier of an instructional method to be used" +
      " in all external references."
  },
  abbreviation: {
    type: GraphQLString,
    description: "Human readable abbreviated name to an instructional method."
  },
  title: {
    type: GraphQLString,
    description: "The full name of an instructional method."
  }
};

const createInstructionalMethod = {
  type: InstructionalMethodType,
  description: "This API creates a new instructional method record with given" +
    " data in the request body.",
  args: InstructionalMethodArgs,
  resolve: (root, args, context) =>
    new InstructionalMethodService(context).create(args)
};

const updateInstructionalMethod = {
  type: InstructionalMethodType,
  description: "This API allows to update a instructional method with" +
    " given ID.",
  args: InstructionalMethodArgs,
  resolve: (root, args, context) =>
    new InstructionalMethodService(context).update(args)
};

export { createInstructionalMethod, updateInstructionalMethod };
