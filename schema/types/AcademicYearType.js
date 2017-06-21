import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const AcademicYearType = new GraphQLObjectType({
  name: "AcademicYear",
  description: "Academic Year",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The Surrogate Id of the STVACYR table"
    },
    code: {
      type: GraphQLString,
      description: "Code value to identify the academic year to which this" +
        " term code is assigned"
    },
    description: {
      type: GraphQLString,
      description: "Description of the academic year associated with the" +
        " academic year code"
    },
    version: {
      type: GraphQLString,
      description: "Optimistic lock token"
    }
  })
});

export { AcademicYearType };
