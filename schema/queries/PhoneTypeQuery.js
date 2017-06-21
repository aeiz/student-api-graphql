import { GraphQLString, GraphQLList, GraphQLInt } from "graphql";
import { PhoneTypeType } from "../types";
import { PhoneTypeService } from "../../services";

const PhoneTypeQuery = {
  type: PhoneTypeType,
  description: "This API returns a phone type data by given ID.",
  args: {
    id: {
      type: GraphQLString,
      description: "A globally unique identifier of a type of phone."
    }
  },
  resolve: (root, args, context) => new PhoneTypeService(context).load(args.id)
};

const PhoneTypesQuery = {
  type: new GraphQLList(PhoneTypeType),
  description: "Provide the list of phone types.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt }
  },
  resolve: (root, args, context) => new PhoneTypeService(context).list(args)
};

export { PhoneTypeQuery, PhoneTypesQuery };
