import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { PersonHoldTypeType } from "../types";
import { PersonHoldTypeService } from "../../services";

const PersonHoldTypeQuery = {
  type: PersonHoldTypeType,
  description: "This API returns the details of a specific hold type" +
    " for a given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "The global identifier of a person hold type."
    }
  },
  resolve: (root, args, context) =>
    new PersonHoldTypeService(context).load(args.id)
};

const PersonHoldTypesQuery = {
  type: new GraphQLList(PersonHoldTypeType),
  description: "Provides the list of all hold types defined for a person.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt }
  },
  resolve: (root, args, context) =>
    new PersonHoldTypeService(context).list(args)
};

export { PersonHoldTypeQuery, PersonHoldTypesQuery };
