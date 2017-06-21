import { GraphQLID, GraphQLString } from "graphql";
import { ClassSchedulesType } from "../types";
//import { ClassScheduleService } from '../../services';

const ClassSchedulesQuery = {
  type: ClassSchedulesType,
  args: {
    bannerId: { type: GraphQLID },
    termCode: { type: GraphQLString }
  },
  // TODO: Add Service
  resolve: (root, args, context) =>
    context.loaders.classSchedulesLoader.load(args.bannerId)
};

export { ClassSchedulesQuery };
