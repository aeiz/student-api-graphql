import { GraphQLID, GraphQLString, GraphQLList, GraphQLInt } from "graphql";
import { OrderAscDescArg } from "../types/args";
import { EducationalInstitutionUnitType } from "../types";
import { EducationalInstitutionUnitService } from "../../services";

const EducationalInstitutionUnitQuery = {
  type: EducationalInstitutionUnitType,
  description: "This API returns an educational institution unit record" +
    " for the given id.",
  args: {
    id: {
      type: GraphQLID,
      description: "The global identifier of the educational institution" +
        " unit"
    }
  },
  resolve: (root, args, context) =>
    new EducationalInstitutionUnitService(context).load(args.id)
};

const EducationalInstitutionUnitsQuery = {
  type: new GraphQLList(EducationalInstitutionUnitType),
  description: "This API returns list of educational institution unit" +
    " records.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    // Add enum type for sort and order options
    sort: { type: GraphQLString }, // type
    order: { type: OrderAscDescArg },
    type: { type: GraphQLString }
  },
  resolve: (root, args, context) =>
    new EducationalInstitutionUnitService(context).list(args)
};

export { EducationalInstitutionUnitQuery, EducationalInstitutionUnitsQuery };
