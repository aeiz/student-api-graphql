import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} from "graphql";

import {
  AddressType,
  ClassSchedulesType,
  CredentialType,
  EmailType,
  InterestType,
  MaritalStatusType,
  PersonIdentificationType,
  PersonNameType,
  PersonVisaType,
  PhoneType,
  PrivacyStatusType,
  RaceType,
  ReligionType,
  RestrictionTypeType,
  RoleType,
  StudentType,
  StudentGradeType,
  StudentHoldType
} from ".";

import {
  AddressService,
  InterestService,
  PersonIdentificationService,
  PersonRestrictionTypeService,
  PersonVisaService,
  ReligionService,
  StudentService,
  StudentClassScheduleService,
  StudentGradeService,
  StudentHoldService
} from "../../services";

const PersonType = new GraphQLObjectType({
  name: "Person",
  description: "Person",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A global identifier of a person."
    },
    bannerId: {
      description: "Banner ID",
      type: GraphQLString,
      resolve: person =>
        person.credentials.find(cred => cred.type === "bannerId").value
    },
    names: {
      description: "List of Names Associated with Person",
      type: new GraphQLList(PersonNameType)
    },
    dateOfBirth: {
      description: "The date when a person was born.",
      type: GraphQLString
    },
    dateDeceased: {
      description: "The date when a person died.",
      type: GraphQLString
    },
    gender: {
      description: "The biological or social cultural masculinity or" +
        " femininity of the person.",
      type: GraphQLString
    },
    privacyStatus: {
      description: "Privacy Status Information",
      type: PrivacyStatusType
    },
    religionId: {
      description: "The global identifier for the Religion.",
      type: GraphQLString,
      resolve: (root, args, context) =>
        root.religion ? root.religion.id : null
    },
    // TODO: religion
    religion: {
      description: "Religion Information",
      type: new GraphQLList(ReligionType)
    },

    // TODO: ethnicity

    // TODO: races
    races: {
      description: "List of Races",
      type: new GraphQLList(RaceType)
    },

    roles: {
      description: "List of Roles",
      type: new GraphQLList(RoleType)
    },

    // TODO: languages

    // TODO: fix maritalStatus
    maritalStatus: {
      description: "Martial Status",
      type: MaritalStatusType
    },
    citizenshipStatusCategory: {
      description: "A global category of citizenship statuses.",
      type: GraphQLString,
      resolve: (root, args, context) =>
        root.citizenshipStatus ? root.citizenshipStatus.category : null
    },
    citizenshipStatusDetailId: {
      description: "The global identifier for the Detail.",
      type: GraphQLString,
      resolve: (root, args, context) =>
        root.citizenshipStatus ? root.citizenshipStatus.detail.id : null
    },
    countryOfBirth: {
      description: "The ISO 3166-1 alpha-3 code of the country which the" +
        " person was born in",
      type: GraphQLString
    },
    citizenshipCountry: {
      description: "The country in which the person is a citizen.",
      type: GraphQLString
    },

    // TODO: identityDocuments

    identification: {
      description: "Identification",
      type: PersonIdentificationType,
      resolve: (root, args, context) =>
        new PersonIdentificationService(context).load(
          root.credentials.find(cred => cred.type === "bannerId").value
        )
    },
    credentials: {
      type: new GraphQLList(CredentialType),
      description: "List of Credentials"
    },
    interests: {
      type: new GraphQLList(InterestType),
      description: "List of Interests",
      resolve: (root, args, context) =>
        new InterestService(context).loadMany(
          (root.interests || Array()).map(interest => interest.id)
        )
    },
    visas: {
      type: new GraphQLList(PersonVisaType),
      description: "List of Visas",
      resolve: (root, args, context) =>
        new PersonVisaService(context).list({ person: root.id })
    },
    restrictionTypes: {
      type: new GraphQLList(RestrictionTypeType),
      description: "List of Restriction Types for Person",
      resolve: (root, args, context) =>
        new PersonRestrictionTypeService(context).load(root.id)
    },
    // TODO: addresses, fix shape?
    addresses: {
      type: new GraphQLList(AddressType),
      description: "List of Addresses",
      resolve: (root, args, context) =>
        new AddressService(context).loadMany(
          (root.addresses || Array()).map(address => address.address.id)
        )
    },
    phones: {
      type: new GraphQLList(PhoneType),
      description: "List of Phones"
    },
    emails: {
      description: "List of Email Addresses",
      type: new GraphQLList(EmailType)
    },
    classSchedule: {
      description: "Schedule of Classes",
      type: ClassSchedulesType,
      resolve: (root, args, context) =>
        new StudentClassScheduleService(context).load(
          root.credentials.find(cred => cred.type === "bannerId").value
        )
    },
    student: {
      description: "Student Record",
      type: StudentType,
      resolve: (root, args, context) =>
        new StudentService(context).load(root.id)
    },
    studentGrades: {
      description: "List of Student Grades",
      type: new GraphQLList(StudentGradeType),
      resolve: (root, args, context) =>
        new StudentGradeService(context).load(
          root.credentials.find(cred => cred.type === "bannerId").value
        )
    },
    studentHolds: {
      description: "List of Student Holds",
      type: new GraphQLList(StudentHoldType),
      resolve: (root, args, context) =>
        new StudentHoldService(context).load(
          root.credentials.find(cred => cred.type === "bannerId").value
        )
    }
  })
});

export { PersonType };
