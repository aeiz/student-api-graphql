import { GraphQLObjectType, GraphQLString } from "graphql";

const AdvisorType = new GraphQLObjectType({
  name: "Advisor",
  description: "Advisor",
  fields: () => ({
    bannerId: {
      type: GraphQLString,
      description: "The identification number used to access a person"
    },
    confidential: {
      type: GraphQLString,
      description: "Identifies whether this person information is" +
        " confidential"
    },
    firstName: {
      type: GraphQLString,
      description: "Advisor's first name"
    },
    fullName: {
      type: GraphQLString,
      description: "Advisor's full name"
    },
    lastName: {
      type: GraphQLString,
      description: "Advisor's last name"
    },
    middleInitial: {
      type: GraphQLString,
      description: "Advisor's middle initial"
    },
    surnamePrefix: {
      type: GraphQLString,
      description: "The surname prefix used for the advisor"
    }
  })
});

export { AdvisorType };
