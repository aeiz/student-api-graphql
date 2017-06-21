import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

import { AcademicYearType, TermTypeType } from ".";

const TermType = new GraphQLObjectType({
  name: "Term",
  description: "Term",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The Surrogate Id of the STVTERM table"
    },
    code: {
      type: GraphQLString,
      description: "Code value to identify the term"
    },
    description: {
      type: GraphQLString,
      description: "Description of the term associated with the term code"
    },
    endDate: {
      type: GraphQLString,
      description: "Field that identifies the last date(yyyy-MM-dd) on which" +
        " classes in this term meet"
    },
    financeSummerIndicator: {
      type: GraphQLString,
      description: "Field that indicates that the term is a summer term"
    },
    financialAidPeriod: {
      type: GraphQLString,
      description: "Code of the beginning period for interfacing with a" +
        " third-party financial aid system, if applicable"
    },
    financialAidProcessingYear: {
      type: GraphQLString,
      description: "Code of the aid year with which this term is associated"
    },
    financialAidTerm: {
      type: GraphQLString,
      description: "Code of the term for interfacing with a third-party" +
        " financial aid system, if applicable"
    },
    financialEndPeriod: {
      type: GraphQLString,
      description: "Code of the ending period for interfacing with a" +
        " third-party financial aid system, if applicable"
    },
    housingEndDate: {
      type: GraphQLString,
      description: "Field that identifies the last date(yyyy-MM-dd) for" +
        " housing, meal plan, and phone assignments associated with this term."
    },
    housingStartDate: {
      type: GraphQLString,
      description: "Field that identifies the first date(yyyy-MM-dd) for" +
        " housing, meal plan, and phone assignments associated with this term."
    },
    startDate: {
      type: GraphQLString,
      description: "Field that identifies the first date(yyyy-MM-dd) on" +
        " which classes in this term meet"
    },
    systemReqInd: {
      type: GraphQLString,
      description: "Field that specifies whether this value is required by" +
        " the system"
    },
    academicYear: {
      type: AcademicYearType,
      description: "Academic Year",
      resolve: (root, args, context) => root.acyr_code
    },
    termType: {
      type: TermTypeType,
      description: "Term Type",
      resolve: (root, args, context) => root.trmt_code
    },
    version: {
      type: GraphQLString,
      description: "Optimistic lock token"
    }
  })
});

export { TermType };
