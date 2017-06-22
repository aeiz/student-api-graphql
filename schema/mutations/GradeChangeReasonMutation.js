import { GraphQLID, GraphQLString, GraphQLNonNull } from "graphql";

import { GradeChangeReasonType } from "../types";
import { GradeChangeReasonService } from "../../services";

const GradeChangeReasonArgs = {
  id: {
    type: new GraphQLNonNull(GraphQLID),
    description: "Globally-unique identifier of the grade change reason" +
      " (STVGCHG)"
  },
  code: {
    type: GraphQLString,
    description: "The code that identifies the grade change reason (e.g. 'OE')"
  },
  title: {
    type: GraphQLString,
    description: "The full name of a grade change reason" +
      " (e.g. 'Original Entry')"
  }
};

const createGradeChangeReason = {
  type: GradeChangeReasonType,
  description: "This API creates a grade change reason with given data in the" +
    " request body.",
  args: GradeChangeReasonArgs,
  resolve: (root, args, context) =>
    new GradeChangeReasonService(context).create(args)
};

const updateGradeChangeReason = {
  type: GradeChangeReasonType,
  description: "This API allows to update a grade change reason with given ID.",
  args: GradeChangeReasonArgs,
  resolve: (root, args, context) =>
    new GradeChangeReasonService(context).update(args)
};

export { createGradeChangeReason, updateGradeChangeReason };
