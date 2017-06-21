import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean
} from "graphql";

import { FacultyType } from "./FacultyType";
import { MeetingTimeType } from "./MeetingTimeType";

const ClassType = new GraphQLObjectType({
  name: "Class",
  description: "Class",
  fields: () => ({
    academicYear: {
      description: "Code value to identify the academic year to which this" +
        " term code is assigned",
      type: GraphQLString
    },
    academicYearDescription: {
      description: "Description of the academic year associated with the" +
        " academic year code",
      type: GraphQLString
    },
    completionDate: {
      description: "Field that identifies part-of-term end date(yyyy-MM-dd)",
      type: GraphQLString
    },
    courseNumber: {
      description: "Field that identifies the course number associated" +
        " with the CRN",
      type: GraphQLString
    },
    courseReferenceNumber: {
      description: "Field that identifies the course reference number" +
        " associated with the class section",
      type: GraphQLString
    },
    courseRegistrationStatus: {
      description: "Course Registration Status",
      type: new GraphQLObjectType({
        name: "CourseRegistrationStatus",
        description: "Course Registration Status",
        fields: () => ({
          code: {
            type: GraphQLString,
            description: "Field that identifies the course registration" +
              " status associated with the CRN"
          },
          description: {
            type: GraphQLString,
            description: "Description of the course registration status code"
          }
        })
      })
    },
    courseTitle: {
      description: "Course Title",
      type: GraphQLString
    },
    creditHour: {
      description: "Field that identifies the credit hours associated" +
        " with the CRN",
      type: GraphQLString
    },
    faculty: {
      description: "List of Faculty",
      type: new GraphQLList(FacultyType)
    },
    gradingMode: {
      description: "Field that identifies grading mode code for the section",
      type: GraphQLString
    },
    gradingModeDescription: {
      description: "Field that identifies the grading mode associated" +
        " with the grading mode code",
      type: GraphQLString
    },
    instructionalMethod: {
      description: "Field that identifies the instructional method code" +
        " assigned to the section",
      type: GraphQLString
    },
    instructionalMethodDescription: {
      description: "Field that identifies the instructional method" +
        " associated with the instructional method code",
      type: GraphQLString
    },
    ceuInd: {
      type: GraphQLBoolean,
      description: "Field that identifies the continuing education indicator",
      resolve: (root, args, context) => (root.level ? root.level.ceuInd : null)
    },
    meetingTimes: {
      description: "List of Meeting Times",
      type: new GraphQLList(MeetingTimeType)
    },
    partOfTerm: {
      description: "Code value to identify the part-of-term for the base" +
        " part-of-term",
      type: GraphQLString
    },
    partOfTermDescription: {
      description: "Description of the part-of-term associated with the" +
        " part-of-term code",
      type: GraphQLString
    },
    scheduleDescription: {
      description: "Field that identifies the schedule type associated" +
        " with the schedule type code",
      type: GraphQLString
    },
    scheduleType: {
      description: "Field that identifies instructional type code of the" +
        " section being scheduled",
      type: GraphQLString
    },
    sequenceNumber: {
      description: "Field that identifies the section number of a course",
      type: GraphQLString
    },
    startDate: {
      description: "Field that identifies the part-of-term start" +
        " date(yyyy-MM-dd)",
      type: GraphQLString
    },
    subject: {
      description: "Field that identifies the subject associated with the CRN",
      type: GraphQLString
    },
    subjectDescription: {
      description: "Description of the subject code",
      type: GraphQLString
    },
    term: {
      description: "Code value to identify the term",
      type: GraphQLString
    },
    termDescription: {
      description: "Description of the term associated with the term code",
      type: GraphQLString
    }
  })
});

export { ClassType };
