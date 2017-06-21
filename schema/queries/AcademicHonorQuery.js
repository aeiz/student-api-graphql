import { GraphQLID, GraphQLList, GraphQLInt, GraphQLString } from "graphql";
import { OrderAscDescArg } from "../types/args";
import { AcademicHonorType } from "../types";
import { AcademicHonorService } from "../../services";

const AcademicHonorQuery = {
  type: AcademicHonorType,
  description: "This API returns the details of a specific" +
    " academic-honors by the given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "A global identifier for an academic honor."
    }
  },
  resolve: (root, args, context) =>
    new AcademicHonorService(context).load(args.id)
};

const AcademicHonorsQuery = {
  type: new GraphQLList(AcademicHonorType),
  description: "Provides the list of all honors.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 },
    sort: { type: GraphQLString }, // TODO: add enum
    order: { type: OrderAscDescArg },
    type: { type: GraphQLString } // TODO: enum for type?
  },
  resolve: (root, args, context) => new AcademicHonorService(context).list(args)
};

export { AcademicHonorQuery, AcademicHonorsQuery };
