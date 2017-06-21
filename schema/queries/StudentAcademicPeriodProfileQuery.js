import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { StudentAcademicPeriodProfileType } from "../types";
import { StudentAcademicPeriodProfileService } from "../../services";

const StudentAcademicPeriodProfileQuery = {
  type: StudentAcademicPeriodProfileType,
  description: "This API returns a Term Enrollment information by given id.",
  args: {
    id: {
      type: GraphQLID,
      description: "The global identifier of the student academic period" +
        " profile (SFBETRM)."
    }
  },
  resolve: (root, args, context) =>
    new StudentAcademicPeriodProfileService(context).load(args.id)
};

const StudentAcademicPeriodProfilesQuery = {
  type: new GraphQLList(StudentAcademicPeriodProfileType),
  description: "This API returns a list of Term Enrollment information.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    person: { type: GraphQLID },
    academicPeriod: { type: GraphQLID }
  },
  resolve: (root, args, context) =>
    new StudentAcademicPeriodProfileService(context).list(args)
};

export {
  StudentAcademicPeriodProfileQuery,
  StudentAcademicPeriodProfilesQuery
};
