import createDebug from "debug";
const debug = createDebug("schema");

import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from "graphql";

import * as Queries from "./queries";
import * as Mutations from "./mutations";

const RootMutation = new GraphQLObjectType({
  name: "Mutation",
  description: "These are the things we can change",
  fields: () => ({
    createAuthenticationToken: Mutations.createAuthenticationToken,

    createAcademicCredential: Mutations.createAcademicCredential,
    updateAcademicCredential: Mutations.updateAcademicCredential

    //createAcademicDiscipline: Mutations.createAcademicDiscipline,
    //updateAcademicDiscipline: Mutations.updateAcademicDiscipline,

    //createAcademicLevel: Mutations.createAcademicLevel,
    //updateAcademicLevel: Mutations.updateAcademicLevel,

    //createEthnicity: Mutations.createEthnicity,
    //updateEthnicity: Mutations.updateEthnicity,

    //createGradeChangeReason: Mutations.createGradeChangeReason,
    //updateGradeChangeReason: Mutations.updateGradeChangeReason,

    //createGradeMode: Mutations.createGradeMode,
    //updateGradeMode: Mutations.updateGradeMode,

    //createInstructionalMethod: Mutations.createInstructionalMethod,
    //updateInstructionalMethod: Mutations.updateInstructionalMethod,

    //createMaritalStatus: Mutations.createMaritalStatus,
    //updateMaritalStatus: Mutations.updateMaritalStatus,

    //createRace: Mutations.createRace,
    //updateRace: Mutations.updateRace,

    //createRestrictionType: Mutations.createRestrictionType,
    //updateRestrictionType: Mutations.updateRestrictionType,

    //createSubject: Mutations.createSubject,
    //updateSubject: Mutations.updateSubject,
  })
});

const RootQuery = new GraphQLObjectType({
  name: "Query",
  description: "The root of all StudentAPI queries.",
  fields: () => ({
    about: Queries.AboutQuery,
    healthCheck: Queries.HealthCheckQuery,

    academicCredential: Queries.AcademicCredentialQuery,
    academicCredentials: Queries.AcademicCredentialsQuery,

    academicDiscipline: Queries.AcademicDisciplineQuery,
    academicDisciplines: Queries.AcademicDisciplinesQuery,

    academicHonor: Queries.AcademicHonorQuery,
    academicHonors: Queries.AcademicHonorsQuery,

    academicLevel: Queries.AcademicLevelQuery,
    academicLevels: Queries.AcademicLevelsQuery,

    academicPeriod: Queries.AcademicPeriodQuery,
    academicPeriods: Queries.AcademicPeriodsQuery,

    academicPeriodEnrollmentStatus: Queries.AcademicPeriodEnrollmentStatusQuery,
    academicPeriodEnrollmentStatuses: Queries.AcademicPeriodEnrollmentStatusesQuery,

    academicProgram: Queries.AcademicProgramQuery,
    academicPrograms: Queries.AcademicProgramsQuery,

    academicStanding: Queries.AcademicStandingQuery,
    academicStandings: Queries.AcademicStandingsQuery,

    address: Queries.AddressQuery,
    addresses: Queries.AddressesQuery,

    addressType: Queries.AddressTypeQuery,
    addressTypes: Queries.AddressTypesQuery,

    // TODO: advisors
    // TODO: advisees
    // TODO: advisee-grades
    // TODO: advisee-searches
    // TODO: advisee-assignments

    building: Queries.BuildingQuery,
    buildings: Queries.BuildingsQuery,

    campusInvolvement: Queries.CampusInvolvementQuery,
    campusInvolvements: Queries.CampusInvolvementsQuery,

    campusInvolvementRole: Queries.CampusInvolvementRoleQuery,
    campusInvolvementRoles: Queries.CampusInvolvementRolesQuery,

    campusOrganization: Queries.CampusOrganizationQuery,
    campusOrganizations: Queries.CampusOrganizationsQuery,

    campusOrganizationType: Queries.CampusOrganizationTypeQuery,
    campusOrganizationTypes: Queries.CampusOrganizationTypesQuery,

    citizenshipStatus: Queries.CitizenshipStatusQuery,
    citizenshipStatuses: Queries.CitizenshipStatusesQuery,

    // TODO: Fix
    classSchedules: Queries.ClassSchedulesQuery,

    // TODO: finish type definition
    course: Queries.CourseQuery,
    courses: Queries.CoursesQuery,

    creditCategory: Queries.CreditCategoryQuery,
    creditCategories: Queries.CreditCategoriesQuery,

    // TODO: Fix SchemaValidation error in StudentAPI:
    //  Mapping for ADDRESSES.DEFAULT.ADDRESSTYPE is not valid
    // TODO: Fix type definition
    educationalInstitution: Queries.EducationalInstitutionQuery,
    educationalInstitutions: Queries.EducationalInstitutionsQuery,

    educationalInstitutionUnit: Queries.EducationalInstitutionUnitQuery,
    educationalInstitutionUnits: Queries.EducationalInstitutionUnitsQuery,

    emailType: Queries.EmailTypeQuery,
    emailTypes: Queries.EmailTypesQuery,

    enrollmentStatus: Queries.EnrollmentStatusQuery,
    enrollmentStatuses: Queries.EnrollmentStatusesQuery,

    ethnicity: Queries.EthnicityQuery,
    ethnicities: Queries.EthnicitiesQuery,

    externalEducation: Queries.ExternalEducationQuery,
    externalEducations: Queries.ExternalEducationsQuery,

    facultyAdvisor: Queries.FacultyAdvisorQuery,

    geographicArea: Queries.GeographicAreaQuery,
    geographicAreas: Queries.GeographicAreasQuery,

    geographicAreaType: Queries.GeographicAreaTypeQuery,
    geographicAreaTypes: Queries.GeographicAreaTypesQuery,

    gradeChangeReason: Queries.GradeChangeReasonQuery,
    gradeChangeReasons: Queries.GradeChangeReasonsQuery,

    gradeDefinition: Queries.GradeDefinitionQuery,
    gradeDefinitions: Queries.GradeDefinitionsQuery,

    gradeMode: Queries.GradeModeQuery,
    gradeModes: Queries.GradeModesQuery,

    gradeScheme: Queries.GradeSchemeQuery,
    gradeSchemes: Queries.GradeSchemesQuery,

    // TODO: finish type definition
    instructionalEvent: Queries.InstructionalEventQuery,
    instructionalEvents: Queries.InstructionalEventsQuery,

    instructionalMethod: Queries.InstructionalMethodQuery,
    instructionalMethods: Queries.InstructionalMethodsQuery,

    instructionalPlatform: Queries.InstructionalPlatformQuery,
    instructionalPlatforms: Queries.InstructionalPlatformsQuery,

    // TODO: Implemented in 9.8? Test.
    instructor: Queries.InstructorQuery,
    instructors: Queries.InstructorsQuery,

    // TODO: Implemented in 9.8? Test.
    instructorCategory: Queries.InstructorCategoryQuery,
    instructorCategories: Queries.InstructorCategoriesQuery,

    // TODO: Implemented in 9.8? Test.
    instructorStaffType: Queries.InstructorStaffTypeQuery,
    instructorStaffTypes: Queries.InstructorStaffTypesQuery,

    // TODO: Implemented in 9.8? Test.
    instructorTenureType: Queries.InstructorTenureTypeQuery,
    instructorTenureTypes: Queries.InstructorTenureTypesQuery,

    interest: Queries.InterestQuery,
    interests: Queries.InterestsQuery,

    maritalStatus: Queries.MaritalStatusQuery,
    maritalStatuses: Queries.MaritalStatusesQuery,

    // TODO: organization, finish type definition
    organization: Queries.OrganizationQuery,
    organizations: Queries.OrganizationsQuery,

    // TODO: person, finish type definition
    person: Queries.PersonQuery,
    persons: Queries.PersonsQuery,

    personCredentials: Queries.PersonCredentialsQuery,
    personsCredentials: Queries.PersonsCredentialsQuery,

    // TODO: person-contacts

    personFilter: Queries.PersonFilterQuery,
    personFilters: Queries.PersonFiltersQuery,

    // TODO: person-guardians, Mapping for ADDRESS.COUNTRY.DEFAULT is not valid

    personHold: Queries.PersonHoldQuery,
    personHolds: Queries.PersonHoldsQuery,

    personVisa: Queries.PersonVisaQuery,
    personVisas: Queries.PersonVisasQuery,

    /*
    TODO: Fix SchemaValidation error in StudentAPI for person hold type
    {
      "code": "Global.SchemaValidation.Error",
      "message": "Person hold type not found",
      "description": "Errors parsing input JSON."
    }*/
    personHoldType: Queries.PersonHoldTypeQuery,
    personHoldTypes: Queries.PersonHoldTypesQuery,

    personIdentification: Queries.PersonIdentificationQuery,
    personIdentifications: Queries.PersonIdentificationsQuery,

    personNameType: Queries.PersonNameTypeQuery,
    personNameTypes: Queries.PersonNameTypesQuery,

    personRestrictionTypes: Queries.PersonRestrictionTypesQuery,

    // TODO: Fix SchemaValidation error in StudentAPI:
    // A mapping rule does not exist for PERSONAL.RELATIONSHIP.TYPES
    personalRelationshipType: Queries.PersonalRelationshipTypeQuery,
    personalRelationshipTypes: Queries.PersonalRelationshipTypesQuery,

    phoneType: Queries.PhoneTypeQuery,
    phoneTypes: Queries.PhoneTypesQuery,

    // TODO: A mapping rule does not exist for RACE.RACIALCATEGORY.V6
    race: Queries.RaceQuery,
    races: Queries.RacesQuery,

    religion: Queries.ReligionQuery,
    religions: Queries.ReligionsQuery,

    residencyType: Queries.ResidencyTypeQuery,
    residencyTypes: Queries.ResidencyTypesQuery,

    restrictionType: Queries.RestrictionTypeQuery,
    restrictionTypes: Queries.RestrictionTypesQuery,

    // TODO: Implement rooms for 9.8?
    // TODO: rooms
    room: Queries.RoomQuery,
    rooms: Queries.RoomsQuery,

    // TODO: Rooms Availability: /qapi/rooms

    // TODO: Implemented in 9.8? Test.
    roomCharacteristic: Queries.RoomCharacteristicQuery,
    roomCharacteristics: Queries.RoomCharacteristicsQuery,

    roomType: Queries.RoomTypeQuery,
    roomTypes: Queries.RoomTypesQuery,

    // TODO: sections, A mapping rule does not exist for SECTIONDETAIL.STATUS.V4
    // TODO: section-crosslists
    // TODO: section-registrations

    sectionGradeType: Queries.SectionGradeTypeQuery,
    sectionGradeTypes: Queries.SectionGradeTypesQuery,

    // TODO: Implemented in 9.8? Test. Mapping rule issue in v6?
    sectionRegistrationStatus: Queries.SectionRegistrationStatusQuery,
    sectionRegistrationStatuses: Queries.SectionRegistrationStatusesQuery,

    site: Queries.SiteQuery,
    sites: Queries.SitesQuery,

    student: Queries.StudentQuery,
    students: Queries.StudentsQuery,

    studentAcademicPeriodProfile: Queries.StudentAcademicPeriodProfileQuery,
    studentAcademicPeriodProfiles: Queries.StudentAcademicPeriodProfilesQuery,

    // TODO: student-academic-programs
    // TODO: student-academic-standings
    studentAcademicStanding: Queries.StudentAcademicStandingQuery,
    studentAcademicStandings: Queries.StudentAcademicStandingsQuery,

    studentRegistrationEligibility: Queries.StudentRegistrationEligibilityQuery,

    studentClassification: Queries.StudentClassificationQuery,
    studentClassifications: Queries.StudentClassificationsQuery,

    studentCohort: Queries.StudentCohortQuery,
    studentCohorts: Queries.StudentCohortsQuery,

    studentGrades: Queries.StudentGradesQuery,

    studentHolds: Queries.StudentHoldsQuery,

    studentStatus: Queries.StudentStatusQuery,
    studentStatuses: Queries.StudentStatusesQuery,

    studentTag: Queries.StudentTagQuery,
    studentTags: Queries.StudentTagsQuery,

    studentType: Queries.StudentTypeQuery,
    studentTypes: Queries.StudentTypesQuery,

    subject: Queries.SubjectQuery,
    subjects: Queries.SubjectsQuery,

    term: Queries.TermQuery,
    terms: Queries.TermsQuery,

    // TODO: termDetail

    visaType: Queries.VisaTypeQuery,
    visaTypes: Queries.VisaTypesQuery
  })
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});
