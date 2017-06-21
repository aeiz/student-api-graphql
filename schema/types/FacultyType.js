import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean
} from "graphql";

import { ClassType, PersonIdentificationType } from ".";
import { PersonIdentificationService } from "../../services";

const FacultyType = new GraphQLObjectType({
  name: "Faculty",
  description: "Faculty",
  fields: () => ({
    bannerId: {
      type: GraphQLString,
      description: "The identification number used to access a person"
    },
    displayName: {
      type: GraphQLString,
      description: "Field that identifies Instructor's display name"
    },
    emailAddress: {
      type: GraphQLString,
      description: "Field that identifies Instructor's email address"
    },
    primaryIndicator: {
      type: GraphQLBoolean,
      description: "Field that identifies Instructor's primary indicator"
    },
    personIdentification: {
      type: PersonIdentificationType,
      description: "Person identification record for Instructor",
      resolve: (root, args, context) =>
        new PersonIdentificationService(context).load(root.bannerId)
    },
    schedule: {
      type: new GraphQLList(ClassType),
      description: "Schedule for Instructor",
      // TODO: switch to use service
      resolve: (root, args, context) =>
        context.loaders.facultySchedulesLoader.load(root.bannerId)
    }
  })
});

export { FacultyType };
