import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";

import { PersonNameTypeType } from "./PersonNameTypeType";
import { PersonNameTypeService } from "../../services";

const PersonNameType = new GraphQLObjectType({
  name: "Name",
  description: "Person Name",
  fields: () => ({
    title: {
      type: GraphQLString,
      description: "The person's title. For example, 'Mr.', 'Mrs.', or 'Dr.''."
    },
    fullName: {
      type: GraphQLString,
      description: "The person's full name."
    },
    firstName: {
      type: GraphQLString,
      description: "The person's first, or given, name."
    },
    middleName: {
      type: GraphQLString,
      description: "The person's middle name."
    },
    lastName: {
      type: GraphQLString,
      description: "The person's last, or family, name."
    },
    lastNamePrefix: {
      type: GraphQLString,
      description: "The article or preposition portion of a person's last" +
        " name. For example, 'De la', 'Van', or 'Van der Von'."
    },
    pedigree: {
      type: GraphQLString,
      description: "The person's pedigree. For example, 'Jr.' or 'Sr.'."
    },
    professionalAbbreviations: {
      type: GraphQLString,
      description: "A post-nominal professional abbreviation, reflecting an" +
        " earned degree or honor. For example, 'M.D.' or 'Ph.D.'."
    },
    preference: {
      type: GraphQLString,
      description: "Indicates the preferred name for the person." +
        " Only one name should be set to preferred for a person."
    },
    // TODO: check on type
    typeId: {
      type: GraphQLID,
      description: "A global identifier of a person name type.",
      resolve: (root, args, context) => (root.type ? root.type.detail.id : null)
    },
    type: {
      type: PersonNameTypeType,
      description: "Name Type",
      resolve: (root, args, context) =>
        root.type
          ? new PersonNameTypeService(context).load(root.type.detail.id)
          : null
    },
    typeCategory: {
      type: GraphQLString,
      description: "The type of a person's name being defined." +
        " For example, a 'Primary' name.",
      resolve: (root, args, context) => (root.type ? root.type.category : null)
    }
  })
});

export { PersonNameType };
