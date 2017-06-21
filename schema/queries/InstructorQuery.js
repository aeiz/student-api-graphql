import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { InstructorType } from "../types";
import { InstructorService } from "../../services";

const InstructorQuery = {
  type: InstructorType,
  description: "Provide a instructor record for the given id.",
  args: {
    id: {
      type: GraphQLID,
      description: "A global identifier of a instructor record"
    }
  },
  resolve: (root, args, context) => new InstructorService(context).load(args.id)
};

const InstructorsQuery = {
  type: new GraphQLList(InstructorType),
  description: "Provide the list of instructors.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 },
    instructor: { type: GraphQLID }
  },
  resolve: (root, args, context) => new InstructorService(context).list(args)
};

export { InstructorQuery, InstructorsQuery };
