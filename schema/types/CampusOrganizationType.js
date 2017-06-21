import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} from "graphql";

const CampusOrganizationType = new GraphQLObjectType({
  name: "CampusOrganization",
  description: "Campus Organization",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of the campus organizations" +
        " resource (STVACTC and STVCOMT)"
    },
    code: {
      type: GraphQLString,
      description: "The code that identifies the campus organization."
    },
    name: {
      type: GraphQLString,
      description: "The full name of the campus organization."
    },
    type: {
      type: GraphQLString,
      description: "Type of the organizations (eg: athletic, culture)"
    },
    parentOrganization: {
      type: GraphQLString,
      description: "Parent organization to which the campus organization" +
        " comes under. From Banner perspective, there is no parent" +
        " organization defined in this model at this time hence this" +
        " property will not be present in the response"
    }
  })
});

export { CampusOrganizationType };
