import { GraphQLList, GraphQLID, GraphQLEnumType } from "graphql";
import { RestrictionTypeType } from "../types";
import { PersonRestrictionTypeService } from "../../services";

const PersonRestrictionTypesQuery = {
  type: new GraphQLList(RestrictionTypeType),
  description: "Retrieves the list of all the guid of restriction types" +
    " for a person passed.",
  args: {
    id: {
      type: GraphQLID,
      description: "Globally-unique identifier of a person"
    }
  },
  resolve: (root, args, context) =>
    new PersonRestrictionTypeService(context).load(args.id)
};

export { PersonRestrictionTypesQuery };
