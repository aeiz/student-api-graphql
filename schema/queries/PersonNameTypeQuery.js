import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { PersonNameTypeType } from "../types";
import { PersonNameTypeService } from "../../services";

const PersonNameTypeQuery = {
  type: PersonNameTypeType,
  description: "This API returns a person name type data by given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "The global identifier of a person name type."
    }
  },
  resolve: (root, args, context) =>
    new PersonNameTypeService(context).load(args.id)
};

const PersonNameTypesQuery = {
  type: new GraphQLList(PersonNameTypeType),
  description: "Provides the list of all names types defined for a person.",
  args: {
    id: {
      type: GraphQLID,
      description: "A global identifier of a person name type."
    },
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt }
  },
  resolve: (root, args, context) =>
    new PersonNameTypeService(context).list(args)
};

export { PersonNameTypeQuery, PersonNameTypesQuery };
