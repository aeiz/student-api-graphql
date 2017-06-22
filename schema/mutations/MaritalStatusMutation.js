import { GraphQLID, GraphQLString, GraphQLNonNull } from "graphql";

import { MaritalStatusType } from "../types";
import { MaritalStatusService } from "../../services";

const MaritalStatusArgs = {
  id: {
    type: new GraphQLNonNull(GraphQLID),
    description: "The global identifier of a marital status to be used in all" +
      " external references to a marital status (STVMRTL)"
  },
  code: {
    type: GraphQLString,
    description: "The human readable code that identifies a marital status"
  },
  title: {
    type: GraphQLString,
    description: "The full name of a marital status"
  },
  maritalCategory: {
    type: GraphQLString,
    description: "The name of a higher level marital category of which this" +
      " category is a member"
  }
};

const createMaritalStatus = {
  type: MaritalStatusType,
  description: "This API creates a marital status with given data in the" +
    " request body.",
  args: MaritalStatusArgs,
  resolve: (root, args, context) =>
    new MaritalStatusService(context).create(args)
};

const updateMaritalStatus = {
  type: MaritalStatusType,
  description: "This API allows to update a marital status with given id.",
  args: MaritalStatusArgs,
  resolve: (root, args, context) =>
    new MaritalStatusService(context).update(args)
};

export { createMaritalStatus, updateMaritalStatus };
