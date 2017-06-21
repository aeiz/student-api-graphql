import {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLID,
  GraphQLString
} from "graphql";

const FacultyAdvisorType = new GraphQLObjectType({
  name: "FacultyAdvisor",
  description: "Faculty Advisor",
  fields: () => ({
    bannerId: {
      type: GraphQLID,
      description: "The identification number used to access a person"
    },
    advisor: {
      type: GraphQLBoolean,
      description: "Returns true if advisor"
    },
    faculty: {
      type: GraphQLBoolean,
      description: "Returns true if faculty"
    },
    firstName: {
      type: GraphQLString,
      description: "Person's first name"
    },
    lastName: {
      type: GraphQLString,
      description: "Person's last name"
    },
    middleName: {
      type: GraphQLString,
      description: "Person's middle name"
    }
  })
});

export { FacultyAdvisorType };
