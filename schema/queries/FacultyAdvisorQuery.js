import { GraphQLID, GraphQLString, GraphQLList } from "graphql";
import { FacultyAdvisorType } from "../types";
import { FacultyAdvisorService } from "../../services";

const FacultyAdvisorQuery = {
  type: FacultyAdvisorType,
  args: {
    bannerId: {
      type: GraphQLID,
      description: "The identification number used to access a person"
    },
    term: {
      type: GraphQLString,
      description: "Code value to identify the term"
    }
  },
  resolve: (root, args, context) =>
    new FacultyAdvisorService(context).get({
      ...args,
      id: args.bannerId
    })
};

export { FacultyAdvisorQuery };
