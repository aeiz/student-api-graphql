import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

import { EducationalInstitutionType } from ".";
import { EducationalInstitutionService } from "../../services";

const EducationalInstitutionUnitType = new GraphQLObjectType({
  name: "EducationalInstitutionUnit",
  description: "Educational Institution Unit",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of the educational institution unit"
    },
    title: {
      type: GraphQLString,
      description: "The full name of the unit"
    },
    type: {
      type: GraphQLString,
      description: "The type of the unit" +
        " (e.g., college, division, department, etc.)"
    },
    parentInstitutionId: {
      type: GraphQLID,
      description: "The global identifier for the Institution",
      resolve: (root, args, context) => root.parents.institution.id
    },
    parentInstitution: {
      type: EducationalInstitutionType,
      description: "Parent Institution",
      resolve: (root, args, context) =>
        new EducationalInstitutionService(context).load(
          root.parents.institution.id
        )
    }
  })
});

export { EducationalInstitutionUnitType };
