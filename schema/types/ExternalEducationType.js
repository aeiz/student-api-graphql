import {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} from "graphql";

import {
  AcademicCredentialType,
  AcademicDisciplineType,
  EducationalInstitutionType,
  PersonType
} from ".";
import {
  AcademicCredentialService,
  AcademicDisciplineService,
  EducationalInstitutionService,
  PersonService
} from "../../services";

const ExternalEducationType = new GraphQLObjectType({
  name: "ExternalEducation",
  description: "External Education",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of the external education from" +
        " SORHSCH/SORPCOL/SORDEGR/SHRTRIT/SHRTRAM tables"
    },
    personId: {
      type: GraphQLID,
      description: "The global identifier for the Person who was educated at" +
        " the institution",
      resolve: (root, args, context) => root.person.id
    },
    person: {
      type: PersonType,
      description: "Person Record",
      resolve: (root, args, context) =>
        new PersonService(context).load(root.person.id)
    },
    institutionId: {
      type: GraphQLID,
      description: "The global identifier for the Institution where the" +
        " person studied",
      resolve: (root, args, context) =>
        root.institution ? root.institution.id : null
    },
    institution: {
      type: EducationalInstitutionType,
      description: "Institution",
      resolve: (root, args, context) =>
        root.institution
          ? new EducationalInstitutionService(context).load(root.institution.id)
          : null
    },
    credentialId: {
      type: GraphQLString,
      description: "The global identifier for the Credential" +
        " (degree, diploma, etc.) the person was awarded at the institution",
      resolve: (root, args, context) =>
        root.credential ? root.credential.id : null
    },
    credential: {
      type: AcademicCredentialType,
      description: "Credential",
      resolve: (root, args, context) =>
        root.credential
          ? new AcademicCredentialService(context).load(root.credential.id)
          : null
    },
    disciplines: {
      type: new GraphQLList(AcademicDisciplineType),
      description: "List of Disciplines",
      resolve: (root, args, context) =>
        new AcademicDisciplineService(context).loadMany(
          (root.disciplines || Array()).map(discipline => discipline.id)
        )
    },
    startOn: {
      type: GraphQLString,
      description: "The date when the person's education at the institution" +
        " began"
    },
    endOn: {
      type: GraphQLString,
      description: "The date when the person's education at the institution" +
        " ended"
    },
    performanceMeasure: {
      type: GraphQLString,
      description: "A measurement of the student's educational performance at" +
        " the institution (e.g. GPA)"
    },
    // TODO: recognitions
    graduatedOn: {
      type: GraphQLString,
      description: "The date the student graduated from the institution"
    },
    credentialsDate: {
      type: GraphQLString,
      description: "The date when the institution awarded a credential" +
        " (e.g. degree) to the person"
    },
    transcriptReceivedOn: {
      type: GraphQLString,
      description: "The date that the transcript for the student's education" +
        " was received"
    },
    classSize: {
      type: GraphQLInt,
      description: "The size of the class associate with the person's course" +
        " of study"
    },
    classPercentile: {
      type: GraphQLInt,
      description: "The person's class percentile"
    },
    classRank: {
      type: GraphQLInt,
      description: "The person's class rank"
    }
  })
});

export { ExternalEducationType };
