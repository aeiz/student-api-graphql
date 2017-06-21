import {
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLEnumType
} from "graphql";
import { ReligionType } from "../types";
import { ReligionService } from "../../services";

const ReligionQuery = {
  type: ReligionType,
  description: "This API returns the details of a specific religion by" +
    " the given ID.",
  args: {
    id: {
      type: GraphQLString,
      description: "The global identifier of the religion."
    }
  },
  resolve: (root, args, context) => new ReligionService(context).load(args.id)
};

const ReligionsQuery = {
  type: new GraphQLList(ReligionType),
  description: "Provides the list of all religions.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt }
  },
  resolve: (root, args, context) => new ReligionService(context).list(args)
};

export { ReligionQuery, ReligionsQuery };
