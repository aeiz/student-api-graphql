import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { InstructionalEventType } from "../types";
import { InstructionalEventService } from "../../services";

const InstructionalEventQuery = {
  type: InstructionalEventType,
  description: "This API retrieves meeting records (SSRMEET), room and" +
    " faculty assignments (SIRASGN) based on given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "Globally-unique identifier of the instructional-event"
    }
  },
  resolve: (root, args, context) =>
    new InstructionalEventService(context).load(args.id)
};

const InstructionalEventsQuery = {
  type: new GraphQLList(InstructionalEventType),
  description: "This API retrieves meeting records (SSRMEET), room and" +
    " faculty assignments (SIRASGN)",
  args: {
    limit: { type: GraphQLInt, defaultValue: 20 },
    offset: { type: GraphQLInt, defaultValue: 0 },
    instructor: {
      type: GraphQLID,
      description: "Globally-unique identifier of a person"
    }
  },
  resolve: (root, args, context) =>
    new InstructionalEventService(context).list(args)
};

export { InstructionalEventQuery, InstructionalEventsQuery };
