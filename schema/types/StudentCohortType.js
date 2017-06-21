import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const StudentCohortType = new GraphQLObjectType({
  name: "StudentCohort",
  description: "Student Cohort",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of the student cohort(STVCHRT_GUID)"
    },
    code: {
      type: GraphQLString,
      description: "The code that identifies the student cohort(STVCHRT_CODE)."
    },
    title: {
      type: GraphQLString,
      description: "The full name of the student cohort(STVCHRT_DESC)."
    },
    endOn: {
      type: GraphQLString,
      description: "The last date when when students may be assigned to the" +
        " cohort."
    },
    initialAcademicPeriod: {
      type: GraphQLString,
      description: "The first academic period when students may be assigned" +
        " to the cohort."
    },
    startOn: {
      type: GraphQLString,
      description: "The first date when when students may be assigned to the" +
        " cohort."
    }
  })
});

export { StudentCohortType };
