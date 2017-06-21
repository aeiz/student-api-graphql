import { GraphQLString, GraphQLList, GraphQLInt } from "graphql";
import { SectionGradeTypeType } from "../types";
import { SectionGradeTypeService } from "../../services";

const SectionGradeTypeQuery = {
  type: SectionGradeTypeType,
  description: "This API returns section-grade-types records. The types" +
    " of section grade type defined are Midterm and Final.",
  args: {
    id: { type: GraphQLString }
  },
  resolve: (root, args, context) =>
    new SectionGradeTypeService(context).load(args.id)
};

const SectionGradeTypesQuery = {
  type: new GraphQLList(SectionGradeTypeType),
  description: "Provide the list of section types.",
  resolve: (root, args, context) =>
    new SectionGradeTypeService(context).list({})
};

export { SectionGradeTypeQuery, SectionGradeTypesQuery };
