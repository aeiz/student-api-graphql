import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} from "graphql";

import { AcademicCredentialType, AcademicLevelType, SiteType } from ".";
import {
  AcademicCredentialService,
  AcademicLevelService,
  SiteService
} from "../../services";

const AcademicProgramType = new GraphQLObjectType({
  name: "AcademicProgram",
  description: "Academic Program",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of an academic program"
    },
    title: {
      type: GraphQLString,
      description: "The full name of an academic program"
    },
    code: {
      type: GraphQLString,
      description: "A code that identifies an academic program"
    },
    // TODO: authorizing
    sites: {
      type: new GraphQLList(SiteType),
      description: "List of Sites",
      resolve: (root, args, context) =>
        new SiteService(context).loadMany(
          (root.sites || Array()).map(site => site.id)
        )
    },
    academicLevelId: {
      type: GraphQLID,
      description: "The global identifier of the level of academic progress" +
        " that is associated with an academic program",
      resolve: (root, args, context) =>
        root.academicLevel ? root.academicLevel.id : null
    },
    academicLevel: {
      type: AcademicLevelType,
      description: "The level of academic progress that is associated with" +
        " an academic program",
      resolve: (root, args, context) =>
        root.academicLevel
          ? new AcademicLevelService(context).load(root.academicLevel.id)
          : null
    },
    credentials: {
      type: new GraphQLList(AcademicCredentialType),
      description: "List of Credentials",
      resolve: (root, args, context) =>
        new AcademicCredentialService(context).loadMany(
          (root.credentials || Array()).map(credential => credential.id)
        )
    },
    status: {
      type: GraphQLString,
      description: "The status of an academic program"
    },
    startOn: {
      type: GraphQLString,
      startOn: "The date that an academic program starts"
    }
  })
});

export { AcademicProgramType };
