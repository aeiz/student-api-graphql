import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { PersonHoldType } from "../types";
import { PersonHoldService } from "../../services";

const PersonHoldQuery = {
  type: PersonHoldType,
  description: "This API returns the details of a specific person hold" +
    " for a given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "A global identifier for person hold."
    }
  },
  resolve: (root, args, context) => new PersonHoldService(context).load(args.id)
};

const PersonHoldsQuery = {
  type: new GraphQLList(PersonHoldType),
  description: "Provides the list of all persons holds.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    person: {
      type: GraphQLID,
      description: "A global identifier for a person."
    }
  },
  resolve: (root, args, context) => new PersonHoldService(context).list(args)
};

export { PersonHoldQuery, PersonHoldsQuery };
