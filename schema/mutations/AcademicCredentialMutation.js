import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from "graphql";

import { AcademicCredentialType } from "../types";
import { AcademicCredentialService } from "../../services";

const AcademicCredentialArgs = {
  id: {
    type: new GraphQLNonNull(GraphQLID),
    description: "A global identifier for an academic degree."
  },
  abbreviation: {
    type: GraphQLString,
    description: "An abbreviation used to identify a degree (STVDEGC)."
  },
  title: {
    type: GraphQLString,
    description: "The full name of an academic degree."
  },
  type: {
    type: GraphQLString,
    description: "The type of a degree such as 'degree', 'honorary'," +
      " 'diploma', 'certificate' (GORSDAV)."
  },
  description: {
    type: GraphQLString,
    description: "A full description of an academic degree (GORSDAV)."
  }
};

const createAcademicCredential = {
  type: AcademicCredentialType,
  description: "This API creates a new academic credential record.",
  args: AcademicCredentialArgs,
  resolve: (root, args, context) =>
    new AcademicCredentialService(context).create(args)
};

const updateAcademicCredential = {
  type: AcademicCredentialType,
  description: "This API allows to update an academic credential with" +
    " given ID.",
  args: AcademicCredentialArgs,
  resolve: (root, args, context) =>
    new AcademicCredentialService(context).update(args)
};

export { createAcademicCredential, updateAcademicCredential };
