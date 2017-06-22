import { GraphQLID, GraphQLString, GraphQLNonNull } from "graphql";

import { AcademicDisciplineType } from "../types";
import { AcademicDisciplineService } from "../../services";

const AcademicDisciplineArgs = {
  id: {
    type: new GraphQLNonNull(GraphQLID),
    description: "A global identifier for an academic discipline."
  },
  abbreviation: {
    type: GraphQLString,
    description: "An abbreviation that identifies an academic discipline" +
      " (STVMAJR)."
  },
  title: {
    type: GraphQLString,
    description: "The full name of an academic discipline."
  },
  type: {
    type: GraphQLString,
    description: "A type of academic discipline such as 'minor', 'major' and" +
      " 'concentration'."
  }
};

const createAcademicDiscipline = {
  type: AcademicDisciplineType,
  description: "This API creates an academic discipline with given data in" +
    " the request body.",
  args: AcademicDisciplineArgs,
  resolve: (root, args, context) =>
    new AcademicDisciplineService(context).create(args)
};

const updateAcademicDiscipline = {
  type: AcademicDisciplineType,
  description: "This API allows to update an academic discipline with" +
    " given ID.",
  args: AcademicDisciplineArgs,
  resolve: (root, args, context) =>
    new AcademicDisciplineService(context).update(args)
};

export { createAcademicDiscipline, updateAcademicDiscipline };
