import {
  GraphQLID,
  GraphQLList,
  GraphQLInt,
  GraphQLEnumType,
  GraphQLString
} from "graphql";

import { OrderAscDescArg } from "../types/args";
import { CourseType } from "../types";
import { CourseService } from "../../services";

const CourseQuery = {
  type: CourseType,
  description: "This API returns a course data by given id.",
  args: {
    id: {
      type: GraphQLID,
      description: "Globally-unique identifier of the course"
    }
  },
  resolve: (root, args, context) => new CourseService(context).load(args.id)
};

const CoursesQuery = {
  type: new GraphQLList(CourseType),
  description: "This API returns a list of courses.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 10 },
    offset: { type: GraphQLInt, defaultValue: 0 },
    sort: {
      type: new GraphQLEnumType({
        name: "CoursesSort",
        description: "Allowed values for sort parameter",
        values: {
          number: { value: "number" },
          title: { value: "title" },
          schedulingStartOn: { value: "schedulingStartOn" },
          schedulingEndOn: { value: "schedulingEndOn" }
        }
      })
    },
    order: { type: OrderAscDescArg },
    subject: { type: GraphQLID },
    number: { type: GraphQLString },
    owningInstitutionUnits: { type: GraphQLID },
    title: { type: GraphQLString },
    schedulingStartOn: {
      type: GraphQLString,
      description: "Date in format: yyyy-MM-dd’T’HH:mm:ssZ"
    },
    schedulingEndOn: {
      type: GraphQLString,
      description: "Date in format: yyyy-MM-dd’T’HH:mm:ssZ"
    },
    academicLevels: { type: GraphQLID },
    instructionalMethods: { type: GraphQLID }
  },
  resolve: (root, args, context) => new CourseService(context).list(args)
};

export { CourseQuery, CoursesQuery };
