import { GraphQLObjectType, GraphQLString } from "graphql";

const StudentGradeType = new GraphQLObjectType({
  name: "StudentGrade",
  description: "Student Grade",
  fields: () => ({
    courseNumber: {
      type: GraphQLString,
      description: "Field that identifies the course number associated with" +
        " the CRN"
    },
    courseTitle: {
      type: GraphQLString,
      description: "Course title"
    },
    creditHour: {
      type: GraphQLString,
      description: "Field that identifies the credit hours associated with" +
        " the CRN"
    },
    crn: {
      type: GraphQLString,
      description: "Field that identifies the course reference number" +
        " associated with the class section"
    },
    gradeFinal: {
      type: GraphQLString,
      description: "Field that identifies the grade code associated with" +
        " the CRN"
    },
    gradeInAcadHistory: {
      type: GraphQLString,
      description: "Field that identifies the grade code associated with" +
        " the CRN in Academic History"
    },
    gradeMidterm: {
      type: GraphQLString,
      description: "Field that identifies the mid-term grade code" +
        " associated with the CRN"
    },
    gradeRolled: {
      type: GraphQLString,
      description: "Field that identifies whether the grade has been" +
        " rolled to Academic History"
    },
    level: {
      type: new GraphQLObjectType({
        name: "LevelDetail",
        description: "Level Details",
        fields: () => ({
          code: {
            type: GraphQLString,
            description: "Field that identifies the level the registrant" +
              " is enrolled for the CRN"
          },
          description: {
            type: GraphQLString,
            description: "Field that describes the level code associated"
          }
        })
      }),
      description: "Level Details"
    },

    registrationStatus: {
      type: new GraphQLObjectType({
        name: "RegistrationStatusDetail",
        description: "Registration Status Details",
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
      }),
      description: "Registration Status Details"
    },

    classFormat: {
      type: new GraphQLObjectType({
        name: "ClassFormatDetail",
        description: "Class Format Details",
        fields: () => ({
          code: {
            type: GraphQLString,
            description: "Field that identifies instructional type code" +
              " of the section being scheduled"
          },
          description: {
            type: GraphQLString,
            description: "Field that identifies the schedule type" +
              " associated with the schedule type code"
          }
        })
      }),
      description: "Class Format Details"
    },

    sequenceNumber: {
      type: GraphQLString,
      description: "Field that identifies the section number of a course"
    },

    subject: {
      type: new GraphQLObjectType({
        name: "SubjectDetail",
        description: "Subject Details",
        fields: () => ({
          code: {
            type: GraphQLString,
            description: "Field that identifies the subject associated with" +
              " the CRN"
          },
          description: {
            type: GraphQLString,
            description: "Description of the subject code"
          }
        })
      }),
      description: "Subject Details"
    },

    term: {
      type: new GraphQLObjectType({
        name: "TermDetail",
        description: "Term Details",
        fields: () => ({
          code: {
            type: GraphQLString,
            description: "Code value to identify the term"
          },
          description: {
            type: GraphQLString,
            description: "Description of the term associated with the term" +
              " code"
          }
        })
      }),
      description: "Term Details"
    }
  })
});

export { StudentGradeType };
