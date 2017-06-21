import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { PersonalRelationshipTypeType } from "../types";
import { PersonalRelationshipTypeService } from "../../services";

const PersonalRelationshipTypeQuery = {
  type: PersonalRelationshipTypeType,
  description: "Returns the relationship type for a given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "The global identifier of a relationship type."
    }
  },
  resolve: (root, args, context) =>
    new PersonalRelationshipTypeService(context).load(args.id)
};

const PersonalRelationshipTypesQuery = {
  type: new GraphQLList(PersonalRelationshipTypeType),
  description: "Provide the list of relationship types.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 }
  },
  resolve: (root, args, context) =>
    new PersonalRelationshipTypeService(context).list(args)
};

export { PersonalRelationshipTypeQuery, PersonalRelationshipTypesQuery };
