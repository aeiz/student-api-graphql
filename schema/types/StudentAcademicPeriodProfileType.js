import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLString
} from "graphql";

import {
  AcademicLevelType,
  AcademicPeriodType,
  AcademicPeriodEnrollmentStatusType,
  PersonType,
  ResidencyTypeType,
  StudentClassificationType,
  StudentStatusType,
  StudentTagType,
  StudentTypeType
} from ".";

import {
  AcademicLevelService,
  AcademicPeriodService,
  AcademicPeriodEnrollmentStatusService,
  PersonService,
  ResidencyTypeService,
  StudentClassificationService,
  StudentStatusService,
  StudentTagService,
  StudentTypeService
} from "../../services";

const StudentAcademicPeriodProfileType = new GraphQLObjectType({
  name: "StudentAcademicPeriodProfile",
  description: "Student Academic Period Profile",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of the student academic period" +
        " profile (SFBETRM)."
    },
    personId: {
      type: GraphQLID,
      description: "A reference to link a student to the common HEDM" +
        " persons entity.",
      resolve: (root, args, context) => root.person.id
    },
    person: {
      type: PersonType,
      description: "Person Record for Student",
      resolve: (root, args, context) =>
        new PersonService(context).load(root.person.id)
    },
    academicPeriodId: {
      type: GraphQLID,
      description: "A term within an academic year (for example, Semester).",
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
    studentStatusId: {
      type: GraphQLID,
      description: "Status of the student for a given academic period" +
        " (STVSTST).",
      resolve: (root, args, context) => root.studentStatus.id
    },
    studentStatus: {
      type: StudentStatusType,
      description: "Student Status",
      resolve: (root, args, context) =>
        root.studentStatus
          ? new StudentStatusService(context).load(root.studentStatus.id)
          : null
    },
    typeId: {
      type: GraphQLID,
      description: "Type of the student for the academic period (STVSTYP).",
      resolve: (root, args, context) => (root.type ? root.type.id : null)
    },
    type: {
      type: StudentTypeType,
      description: "Student Type",
      resolve: (root, args, context) =>
        root.type ? new StudentTypeService(context).load(root.type.id) : null
    },
    residencyId: {
      type: GraphQLID,
      description: "The residency type of the student for the academic" +
        " period (e.g.: international, in state, out of state, etc.)" +
        " (STVRESD).",
      resolve: (root, args, context) =>
        root.residency ? root.residency.id : null
    },
    residency: {
      type: ResidencyTypeType,
      description: "Residency Type",
      resolve: (root, args, context) =>
        root.residency
          ? new ResidencyTypeService(context).load(root.residency.id)
          : null
    },
    academicPeriodEnrollmentStatusId: {
      type: GraphQLID,
      description: "Status of the student enrollment for a given academic" +
        " period (STVESTS).",
      resolve: (root, args, context) =>
        root.academicPeriodEnrollmentStatus
          ? root.academicPeriodEnrollmentStatus.id
          : null
    },
    academicPeriodEnrollmentStatus: {
      type: AcademicPeriodEnrollmentStatusType,
      description: "Academic Period Enrollment Status",
      resolve: (root, args, context) =>
        root.academicPeriodEnrollmentStatus
          ? new AcademicPeriodEnrollmentStatusService(context).load(
              root.academicPeriodEnrollmentStatus.id
            )
          : null
    },
    academicLoad: {
      type: GraphQLString,
      description: "The relative load (full-time, part-time, overload) of" +
        " a student during the academic period based on the number of" +
        " contact hours or credits"
    },
    tags: {
      type: new GraphQLList(StudentTagType),
      description: "List of Student Tags",
      resolve: (root, args, context) =>
        new StudentTagService(context).loadMany(
          (root.tags || Array()).map(tag => tag.id)
        )
    },
    // TODO: add to measures?
    classificationId: {
      type: GraphQLID,
      description: "The global identifier of a class code(STVCLAS_GUID)",
      resolve: (root, args, context) =>
        root.measures ? root.measures.classification.id : null
    },
    classification: {
      type: StudentClassificationType,
      description: "Student Classification",
      resolve: (root, args, context) =>
        root.measures
          ? new StudentClassificationService(context).load(
              root.measures.classification.id
            )
          : null
    },
    levelId: {
      type: GraphQLID,
      description: "A globally unique identifier of the academic level.",
      resolve: (root, args, context) =>
        root.measures ? root.measures.level.id : null
    },
    level: {
      type: AcademicLevelType,
      description: "Academic Level",
      resolve: (root, args, context) =>
        root.measures
          ? new AcademicLevelService(context).load(root.measures.level.id)
          : null
    },
    performanceMeasure: {
      type: GraphQLString,
      description: "GPA for the level. Calculated by dividing GPA hours for" +
        " the level into Quality points for the level",
      resolve: (root, args, context) =>
        root.measures ? root.measures.performanceMeasure : null
    }
  })
});

export { StudentAcademicPeriodProfileType };
