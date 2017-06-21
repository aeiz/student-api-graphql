import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { AcademicProgramType } from "../types";
import { AcademicProgramService } from "../../services";

const AcademicProgramQuery = {
  type: AcademicProgramType,
  description: "The API retrieves academic program record for a given id.",
  args: {
    id: {
      type: GraphQLID,
      description: "A global identifier of an academic program record."
    }
  },
  resolve: (root, args, context) =>
    new AcademicProgramService(context).load(args.id)
};

const AcademicProgramsQuery = {
  type: new GraphQLList(AcademicProgramType),
  description: "Provides the list of academic programs.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 }
  },
  resolve: (root, args, context) =>
    new AcademicProgramService(context).list(args)
};

export { AcademicProgramQuery, AcademicProgramsQuery };
