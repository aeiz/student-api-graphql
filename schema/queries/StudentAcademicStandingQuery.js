import {
  GraphQLID,
  GraphQLList,
  GraphQLInt
} from "graphql";

import { StudentAcademicStandingType } from "../types";
import { StudentAcademicStandingService } from "../../services";

const StudentAcademicStandingQuery = {
  type: StudentAcademicStandingType,
  description: "Provide a student academic standing record for the given id.",
  args: {
    id: {
      type: GraphQLID,
      description: "A global identifier of a student academic standing record"
    }
  },
  resolve: (root, args, context) =>
    new StudentAcademicStandingService(context).load(args.id)
};

const StudentAcademicStandingsQuery = {
  type: new GraphQLList(StudentAcademicStandingType),
  description: "Provide the list of student academic standings.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt }
  },
  resolve: (root, args, context) =>
    new StudentAcademicStandingService(context).list(args)
};

export { StudentAcademicStandingQuery, StudentAcademicStandingsQuery };
