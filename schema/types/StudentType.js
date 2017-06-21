import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLString
} from "graphql";

import {
  AcademicLevelType,
  PersonType,
  ResidencyTypeType,
  StudentClassificationType,
  StudentCohortType,
  StudentTagType,
  StudentTypeType
} from ".";

import {
  AcademicLevelService,
  PersonService,
  ResidencyTypeService,
  StudentClassificationService,
  StudentCohortService,
  StudentTagService,
  StudentTypeService
} from "../../services";

const StudentType = new GraphQLObjectType({
  name: "Student",
  description: "Student",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of the student(SGBSTDN_GUID)"
    },
    personId: {
      type: GraphQLID,
      description: "A global identifier for person.",
      resolve: (root, args, context) => root.person.id
    },
    person: {
      type: PersonType,
      description: "Person Record for Student",
      resolve: (root, args, context) =>
        new PersonService(context).load(root.person.id)
    },
    cohorts: {
      type: new GraphQLList(StudentCohortType),
      description: "List of Student Cohorts",
      resolve: (root, args, context) =>
        new StudentCohortService(context).loadMany(
          (root.cohorts || Array()).map(cohort => cohort.id)
        )
    },
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
    },
    residencyId: {
      type: GraphQLID,
      description: "The global identifier of a residency(STVRESD_GUID)",
      resolve: (root, args, context) => root.residency.id
    },
    residency: {
      type: ResidencyTypeType,
      description: "Residency Type",
      resolve: (root, args, context) =>
        new ResidencyTypeService(context).load(root.residency.id)
    },
    tags: {
      type: new GraphQLList(StudentTagType),
      description: "List of Student Tags",
      resolve: (root, args, context) =>
        new StudentTagService(context).loadMany(
          (root.tags || Array()).map(tag => tag.id)
        )
    },
    typeId: {
      type: GraphQLID,
      description: "The global identifier of a student type(STVSTYP_GUID)",
      resolve: (root, args, context) => root.type.id
    },
    type: {
      type: StudentTypeType,
      description: "Student Type",
      resolve: (root, args, context) =>
        new StudentTypeService(context).load(root.type.id)
    }
  })
});

export { StudentType };
