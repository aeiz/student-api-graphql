import { GraphQLID, GraphQLString, GraphQLNonNull } from "graphql";

import { AcademicLevelType } from "../types";
import { AcademicLevelService } from "../../services";

const AcademicLevelArgs = {
  id: {
    type: new GraphQLNonNull(GraphQLID),
    description: "A globally unique identifier of the academic level."
  },
  code: {
    type: GraphQLString,
    description: "The code that identifies the academic level (e.g. 'UG')."
  },
  title: {
    type: GraphQLString,
    description: "The full name of the academic level (e.g. 'Undergraduate')."
  }
};

const createAcademicLevel = {
  type: AcademicLevelType,
  description: "This API creates a new academic level record with given data" +
    " in the request body.",
  args: AcademicLevelArgs,
  resolve: (root, args, context) =>
    new AcademicLevelService(context).create(args)
};

const updateAcademicLevel = {
  type: AcademicLevelType,
  description: "This API allows to update a academic level with given ID.",
  args: AcademicLevelArgs,
  resolve: (root, args, context) =>
    new AcademicLevelService(context).update(args)
};

export { createAcademicLevel, updateAcademicLevel };
