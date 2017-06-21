import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLString
} from "graphql";

import {
  AcademicLevelType,
  AcademicPeriodType,
  AcademicProgramType,
  AcademicStandingType,
  StudentType
} from ".";

import {
  AcademicLevelService,
  AcademicPeriodService,
  AcademicProgramService,
  AcademicStandingService,
  StudentService
} from "../../services";

const StudentAcademicStandingType = new GraphQLObjectType({
  name: "StudentAcademicStanding",
  description: "Student Academic Standing",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of the student academic standing."
    },
    type: {
      type: GraphQLString,
      description: "The type of academic standing calculation used to" +
        " determine the student academic standing" +
        " (e.g. level, program, academicPeriod)."
    },
    studentId: {
      type: GraphQLID,
      description: "The global identifier for the Student.",
      resolve: (root, args, context) => root.student.id
    },
    student: {
      type: StudentType,
      description: "Student Record",
      resolve: (root, args, context) =>
        new StudentService(context).load(root.student.id)
    },
    levelId: {
      type: GraphQLID,
      description: "The global identifier for the Level.",
      resolve: (root, args, context) => (root.level ? root.level.id : null)
    },
    level: {
      type: AcademicLevelType,
      description: "Academic Level",
      resolve: (root, args, context) =>
        root.level
          ? new AcademicLevelService(context).load(root.level.id)
          : null
    },
    programId: {
      type: GraphQLID,
      description: "The global identifier for the Program.",
      resolve: (root, args, context) => (root.program ? root.program.id : null)
    },
    program: {
      type: AcademicProgramType, // TODO: verify this is a academic program type
      description: "Academic Program",
      resolve: (root, args, context) =>
        root.program
          ? new AcademicProgramService(context).load(root.program.id)
          : null
    },
    academicPeriodId: {
      type: GraphQLID,
      description: "The global identifier for the Academic Period.",
      resolve: (root, args, context) =>
        root.academicPeriod ? root.academicPeriod.id : null
    },
    academicPeriod: {
      type: AcademicPeriodType,
      description: "Academic Period",
      resolve: (root, args, context) =>
        root.academicPeriod
          ? new AcademicPeriodService(context).load(root.academicPeriod.id)
          : null
    },
    standingId: {
      type: GraphQLID,
      description: "The global identifier for the Standing.",
      resolve: (root, args, context) =>
        root.standing ? root.standing.id : null
    },
    standing: {
      type: AcademicStandingType,
      description: "Academic Standing",
      resolve: (root, args, context) =>
        root.standing
          ? new AcademicStandingService(context).load(root.standing.id)
          : null
    },
    overrideStandingId: {
      type: GraphQLID,
      description: "The global identifier for the Override Standing.",
      resolve: (root, args, context) =>
        root.overrideStanding ? root.overrideStanding.id : null
    },
    overrideStanding: {
      type: AcademicStandingType,
      description: "Override Academic Standing",
      resolve: (root, args, context) =>
        root.overrideStanding
          ? new AcademicStandingService(context).load(root.overrideStanding.id)
          : null
    },
    overrideReason: {
      type: GraphQLString,
      description: "The reason the calculated academic standing was" +
        " overridden."
    }
  })
});

export { StudentAcademicStandingType };
