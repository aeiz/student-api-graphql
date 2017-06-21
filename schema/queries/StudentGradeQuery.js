import { GraphQLList, GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { StudentGradeType } from "../types";
import { StudentGradeService } from "../../services";

const StudentGradesQuery = {
  type: new GraphQLList(StudentGradeType),
  description: "Retrieves the list of all the grade information of the" +
    " student for all the active courses for the term passed.",
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
    new StudentGradeService(context).load(args.bannerId)
};

export { StudentGradesQuery };
