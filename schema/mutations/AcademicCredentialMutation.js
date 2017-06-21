import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLEnumType,
  GraphQLNonNull
} from "graphql";

import { AcademicCredentialType } from "../types";
import { AcademicCredentialService } from "../../services";

const createAcademicCredential = {
  type: AcademicCredentialType,
  description: "This API creates a new academic credential record.",
  args: {
    abbreviation: { type: GraphQLString },
    title: { type: GraphQLString },
    id: { type: GraphQLString },
    type: { type: GraphQLString },
    description: { type: GraphQLString }
  },
  resolve: (root, args, context) =>
    new AcademicCredentialService(context).create(args)
};

const updateAcademicCredential = {
  type: AcademicCredentialType,
  description: "This API allows to update an academic credential with" +
    " given ID.",
  args: {
    abbreviation: { type: GraphQLString },
    title: { type: GraphQLString },
    id: { type: GraphQLString },
    type: { type: GraphQLString },
    description: { type: GraphQLString }
  },
  resolve: (root, args, context) =>
    new AcademicCredentialService(context).update(args)
};

export { createAcademicCredential, updateAcademicCredential };
