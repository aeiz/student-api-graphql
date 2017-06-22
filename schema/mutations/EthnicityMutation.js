import { GraphQLID, GraphQLString, GraphQLNonNull } from "graphql";

import { EthnicityType } from "../types";
import { EthnicityService } from "../../services";

const EthnicityArgs = {
  id: {
    type: new GraphQLNonNull(GraphQLID),
    description: "Globally-unique identifier of the ethnicity (STVETHN)"
  },
  abbreviation: {
    type: GraphQLString,
    description: "A shortened or contracted form of a word or phrase, used to" +
      " represent ethnicities code"
  },
  title: {
    type: GraphQLString,
    description: "The ethnicities title"
  },
  parentCategory: {
    type: GraphQLString,
    description: "The higher-level category of ethnicity"
  },
  // TODO: metadata:{ dataOrigin }
};

const createEthnicity = {
  type: EthnicityType,
  description: "This API creates an ethnicity with given data in the request" +
    " body.",
  args: EthnicityArgs,
  resolve: (root, args, context) => new EthnicityService(context).create(args)
};

const updateEthnicity = {
  type: EthnicityType,
  description: "This API allows to update an ethnicity with given GUID.",
  args: EthnicityArgs,
  resolve: (root, args, context) => new EthnicityService(context).update(args)
};

export { createEthnicity, updateEthnicity };
