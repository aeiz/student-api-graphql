import {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLEnumType
} from "graphql";
import { OrderAscDescArg } from "../types/args";
import { PersonFilterType } from "../types";
import { PersonFilterService } from "../../services";

const PersonFilterQuery = {
  type: PersonFilterType,
  description: "This API returns the details of a specific person hold" +
    " for a given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "A global identifier for person hold."
    }
  },
  resolve: (root, args, context) =>
    new PersonFilterService(context).load(args.id)
};

const PersonFiltersQuery = {
  type: new GraphQLList(PersonFilterType),
  description: "This API returns the list of population selections.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    sort: {
      type: new GraphQLEnumType({
        name: "PersonFiltersSort",
        description: "Allowed values for sort parameter",
        values: {
          code: { value: "code" }
        }
      })
    },
    order: { type: OrderAscDescArg },
    code: { type: GraphQLString }
  },
  resolve: (root, args, context) => new PersonFilterService(context).list(args)
};

export { PersonFilterQuery, PersonFiltersQuery };
