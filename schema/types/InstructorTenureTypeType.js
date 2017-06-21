import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString
} from 'graphql';

const InstructorTenureTypeType = new GraphQLObjectType({
  name: 'InstructorTenureType',
  description: 'Instructor Tenure Type',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'The global identifier of the instructor tenure type.'
    },
    title: {
      type: GraphQLString,
      description: 'The full name of the instructor tenure type.'
    },
    code: {
      type: GraphQLString,
      description: 'A code that may be used to identify the tenure status of'
        + ' the instructor.'
    },
  }),
});

export { InstructorTenureTypeType };
