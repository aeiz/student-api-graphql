import { GraphQLID, GraphQLString, GraphQLNonNull } from "graphql";

import { GradeModeType } from "../types";
import { GradeModeService } from "../../services";

const GradeModeArgs = {
  id: {
    type: new GraphQLNonNull(GraphQLID),
    description: "The global identifier of the grade modes."
  },
  code: {
    type: GraphQLString,
    description: "The code associated with the grade mode(STVGMOD)."
  },
  title: {
    type: GraphQLString,
    description: "The full name of the grade modes."
  }
};

const createGradeMode = {
  type: GradeModeType,
  description: "This API creates a grade mode with given data in the request" +
    " body.",
  args: GradeModeArgs,
  resolve: (root, args, context) => new GradeModeService(context).create(args)
};

const updateGradeMode = {
  type: GradeModeType,
  description: "This API allows to update a grade mode with given ID.",
  args: GradeModeArgs,
  resolve: (root, args, context) => new GradeModeService(context).update(args)
};

export { createGradeMode, updateGradeMode };
