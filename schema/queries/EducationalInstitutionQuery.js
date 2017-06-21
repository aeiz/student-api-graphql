import { GraphQLID, GraphQLList, GraphQLInt, GraphQLString } from "graphql";
import { OrderAscDescArg, SortByType } from "../types/args";
import { EducationalInstitutionType } from "../types";
import { EducationalInstitutionService } from "../../services";

const EducationalInstitutionQuery = {
  type: EducationalInstitutionType,
  description: "This API returns an educational institution record for" +
    " the given id.",
  args: {
    id: {
      type: GraphQLID,
      description: "A global identifier of an educational institution" +
        " record"
    }
  },
  resolve: (root, args, context) =>
    new EducationalInstitutionService(context).load(args.id)
};

const EducationalInstitutionsQuery = {
  type: new GraphQLList(EducationalInstitutionType),
  description: "This API returns list of educational institution records.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 },
    sort: { type: SortByType },
    order: { type: OrderAscDescArg, defaultValue: "asc" },
    type: { type: GraphQLString }
  },
  resolve: (root, args, context) =>
    new EducationalInstitutionService(context).list(args)
};

export { EducationalInstitutionQuery, EducationalInstitutionsQuery };
