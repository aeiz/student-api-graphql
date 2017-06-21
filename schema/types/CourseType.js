import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} from "graphql";

import {
  AcademicLevelType,
  CreditCategoryType,
  EducationalInstitutionUnitType,
  GradeSchemeType,
  InstructionalMethodType,
  SubjectType
} from ".";

import {
  AcademicLevelService,
  CreditCategoryService,
  EducationalInstitutionUnitService,
  GradeSchemeService,
  InstructionalMethodService,
  SubjectService
} from "../../services";

const CourseType = new GraphQLObjectType({
  name: "Course",
  description: "Course",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "Globally-unique identifier of the course",
      type: GraphQLString
    },
    number: {
      type: GraphQLString,
      description: "Course number"
    },
    title: {
      type: GraphQLString,
      description: "Course title"
    },
    schedulingStartOn: {
      type: GraphQLString,
      description: "The starting date at which a Course is avalaible to have" +
        " Sections scheduled to be taken. When combined with the scheduling" +
        " ending date, defines the time period a Course is available for" +
        " scheduling"
    },
    schedulingEndOn: {
      type: GraphQLString,
      description: "The ending date at which a Course is no longer available" +
        "  to have Sections scheduled to be taken. When combined with the" +
        " scheduling start date, defines the time period a Course is" +
        " available for scheduling"
    },
    subjectId: {
      type: GraphQLString,
      description: "Globally-unique identifier of subject (STVSUBJ)",
      resolve: (root, args, context) => root.subject.id
    },
    subject: {
      type: SubjectType,
      description: "Subject",
      resolve: (root, args, context) =>
        new SubjectService(context).load(root.subject.id)
    },
    owningInstitutionUnits: {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: "OwningInstitutionUnit",
          description: "Course",
          fields: () => ({
            institutionUnit: {
              type: EducationalInstitutionUnitType,
              description: "Institution Unit",
              resolve: (root, args, context) =>
                new EducationalInstitutionUnitService(context).load(
                  root.institutionUnit.id
                )
            },
            ownershipPercentage: {
              type: GraphQLString,
              description: "A part or portion of something owned, allotted to," +
                " or contributed by a person or group (not used in Banner)"
            }
          })
        })
      ),
      description: "List of Owning Institution Units"
    },
    academicLevels: {
      type: new GraphQLList(AcademicLevelType),
      description: "List of Academic Levels",
      resolve: (root, args, context) =>
        new AcademicLevelService(context).loadMany(
          (root.academicLevels || Array())
            .map(academicLevel => academicLevel.id)
        )
    },
    gradeSchemes: {
      type: new GraphQLList(GradeSchemeType),
      description: "List of Grade Schemes",
      resolve: (root, args, context) =>
        new GradeSchemeService(context).loadMany(
          (root.gradeSchemes || Array()).map(gradeScheme => gradeScheme.id)
        )
    },
    instructionalMethods: {
      type: new GraphQLList(InstructionalMethodType),
      description: "List of Instructional Methods",
      resolve: (root, args, context) =>
        new InstructionalMethodService(context).loadMany(
          (root.instructionalMethods || Array())
            .map(instructionalMethod => instructionalMethod.id)
        )
    },
    credits: {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: "Credit",
          description: "Credit",
          fields: () => ({
            creditCategory: {
              type: CreditCategoryType,
              description: "Credit Category",
              resolve: (root, args, context) =>
                new CreditCategoryService(context).load(
                  root.creditCategory.detail.id
                )
            },
            increment: {
              type: GraphQLInt,
              description: "It is the multiple by which a numeric range" +
                " of values can be stepped from the minimum to the maximum" +
                " (not used in Banner)"
            },
            measure: {
              type: GraphQLString,
              description: "A unit or standard of measurement" +
                " (not used in Banner)"
            },
            minimum: {
              type: GraphQLInt,
              description: "Minimum number of credit hours for which a" +
                " course may be offered"
            },
            maximum: {
              type: GraphQLInt,
              description: "Maximum number of credit hours for which a" +
                " course may be offered"
            }
          })
        })
      ),
      description: "List of Credits"
    }
  })
});

export { CourseType };
