import { GraphQLID, GraphQLString, GraphQLNonNull } from "graphql";

import { SubjectType } from "../types";
import { SubjectService } from "../../services";

const SubjectArgs = {
  id: {
    type: new GraphQLNonNull(GraphQLID),
    description: "A global identifier of a subject to be used in all external" +
      " references to the subject (STVSUBJ)."
  },
  abbreviation: {
    type: GraphQLString,
    description: "Human readable abbreviated name to a subject."
  },
  title: {
    type: GraphQLString,
    description: "The full name of a subject."
  }
};

const createSubject = {
  type: SubjectType,
  description: "This API creates a subject with given data in the request body",
  args: SubjectArgs,
  resolve: (root, args, context) => new SubjectService(context).create(args)
};

const updateSubject = {
  type: SubjectType,
  description: "This API allows to update a subject with given ID.",
  args: SubjectArgs,
  resolve: (root, args, context) => new SubjectService(context).update(args)
};

export { createSubject, updateSubject };
