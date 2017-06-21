import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from "graphql";

import { InstructionalMethodType } from ".";

import { InstructionalMethodService } from "../../services";

const InstructionalEventType = new GraphQLObjectType({
  name: "InstructionalEvent",
  description: "Instructional Event",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "Globally-unique identifier of the instructional-event"
    },
    sectionId: {
      type: GraphQLString,
      description: "Globally unique identifier of the section (SSBSECT)",
      resolve: (root, args, context) => root.section.id
    },
    // TODO: section
    instructionalMethodId: {
      type: GraphQLString,
      description: "Globally-unique identifier of instructional method" +
        " (STVSCHD)",
      resolve: (root, args, context) => root.instructionalMethod.id
    },
    instructionalMethod: {
      type: InstructionalMethodType,
      description: "Instructional Method",
      resolve: (root, args, context) =>
        new InstructionalMethodService(context).load(
          root.instructionalMethod.id
        )
    },
    workLoad: {
      type: GraphQLInt,
      description: "Faculty workload assignment"
    }
    // TODO: recurrence
    // TODO: locations
    // TODO: instructorRoster
  })
});

export { InstructionalEventType };
