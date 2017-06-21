import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

import {
  AcademicPeriodType,
  CampusInvolvementRoleType,
  CampusOrganizationType,
  PersonType
} from ".";

import {
  AcademicPeriodService,
  CampusInvolvementRoleService,
  CampusOrganizationService,
  PersonService
} from "../../services";

const CampusInvolvementType = new GraphQLObjectType({
  name: "CampusInvolvement",
  description: "Campus Involvement",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of the campus involvements" +
        " resource (SGRSACT, SGRSPRT and SHRCOMM)"
    },
    person: {
      type: PersonType,
      resolve: (root, args, context) =>
        new PersonService(context).load(root.person)
    },
    personId: {
      type: GraphQLID,
      description: "The id of the student who is involved in the" +
        " organization.",
      resolve: (root, args, context) => root.person
    },
    campusOrganization: {
      type: CampusOrganizationType,
      resolve: (root, args, context) =>
        new CampusOrganizationService(context).load(root.campusOrganization)
    },
    campusOrganizationId: {
      type: GraphQLID,
      description: "The organization in the campus the student is" +
        " involved with. The id of the campus-organizations resource",
      resolve: (root, args, context) => root.campusOrganization
    },
    startOn: {
      type: GraphQLString,
      description: "The involvement to the organization started on"
    },
    endOn: {
      type: GraphQLString,
      description: "The involvement to the organization ended on"
    },
    academicPeriod: {
      type: AcademicPeriodType,
      resolve: (root, args, context) =>
        new AcademicPeriodService(context).load(root.academicPeriod)
    },
    academicPeriodId: {
      type: GraphQLID,
      description: "Academic period in which the student was involved in" +
        " this organization. The id of the academic-periods resource",
      resolve: (root, args, context) => root.academicPeriod
    },
    role: {
      type: CampusInvolvementRoleType,
      resolve: (root, args, context) =>
        new CampusInvolvementRoleService(context).load(root.role)
    },
    roleId: {
      type: GraphQLID,
      description: "Role of the student in the organization. The id of" +
        " the campus-involvement-roles resource",
      resolve: (root, args, context) => root.role
    }
  })
});

export { CampusInvolvementType };
