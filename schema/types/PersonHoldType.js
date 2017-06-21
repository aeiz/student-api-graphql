import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

import { PersonType, PersonHoldTypeType } from ".";
import { PersonService, PersonHoldTypeService } from "../../services";

const PersonHoldType = new GraphQLObjectType({
  name: "PersonHold",
  description: "Person Hold",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A global identifier for person hold."
    },
    personId: {
      type: GraphQLString,
      description: "A global identifier for person.",
      resolve: (root, args, context) => root.person.id
    },
    person: {
      type: PersonType,
      description: "Person",
      resolve: (root, args, context) =>
        new PersonService(context).load(root.person.id)
    },
    typeCategory: {
      type: GraphQLString,
      description: "The category for person hold type 'academic', 'finacial'.",
      resolve: (root, args, context) => root.type.category
    },
    typeId: {
      type: GraphQLString,
      description: "A global identifier for person hold type.",
      resolve: (root, args, context) => root.type.detail.id
    },
    type: {
      type: PersonHoldTypeType,
      description: "Person Hold Type",
      resolve: (root, args, context) =>
        new PersonHoldTypeService(context).load(root.type.detail.id)
    },
    startOn: {
      type: GraphQLString,
      description: "Start date for person hold(SPRHOLD)."
    },
    endOn: {
      type: GraphQLString,
      description: "End date for person hold(SPRHOLD)."
    }
  })
});

export { PersonHoldType };
