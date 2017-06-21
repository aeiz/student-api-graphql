import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString
} from 'graphql';

const AcademicLevelType = new GraphQLObjectType({
  name: 'AcademicLevel',
  description: 'Academic Level',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'A globally unique identifier of the academic level.'
    },
    code: {
      type: GraphQLString,
      description: "The code that identifies the academic level (e.g. 'UG')."
    },
    title: {
      type: GraphQLString,
      description: "The full name of the academic level (e.g. 'Undergraduate')."
    },
  }),
});

export { AcademicLevelType };
