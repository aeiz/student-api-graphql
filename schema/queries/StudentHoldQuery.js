import {
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLEnumType
} from "graphql";
import { StudentHoldType } from "../types";
import { StudentHoldService } from "../../services";

const StudentHoldsQuery = {
  type: new GraphQLList(StudentHoldType),
  description: "Provides the student’s current holds information.",
  args: {
    bannerId: {
      type: GraphQLString,
      description: "The identification number used to access a person"
    }
  },
  resolve: (root, args, context) =>
    new StudentHoldService(context).load(args.bannerId)
};

export { StudentHoldsQuery };
