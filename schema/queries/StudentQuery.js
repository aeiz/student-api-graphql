import {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} from "graphql";
import { StudentType } from "../types";
import { StudentService } from "../../services";

const StudentQuery = {
  type: StudentType,
  description: "This API returns a student by given id.",
  args: {
    id: {
      type: GraphQLID,
      description: "The global identifier of the student(SGBSTDN_GUID)"
    }
  },
  resolve: (root, args, context) => new StudentService(context).load(args.id)
};

const StudentsQuery = {
  type: new GraphQLList(StudentType),
  description: "This API provides a list of all students.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    person: { type: GraphQLID },
    residency: { type: GraphQLID },
    type: { type: GraphQLID },
    cohorts: { type: GraphQLID }
  },
  resolve: (root, args, context) => new StudentService(context).list(args)
};

export { StudentQuery, StudentsQuery };
