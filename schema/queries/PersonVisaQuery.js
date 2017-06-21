import {
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLEnumType
} from "graphql";
import { PersonVisaType } from "../types";
import { PersonVisaService } from "../../services";

const PersonVisaQuery = {
  type: PersonVisaType,
  description: "The API retrieves visa records for a given id.",
  args: {
    id: {
      type: GraphQLID,
      description: "A global identifier of a visa record"
    }
  },
  resolve: (root, args, context) => new PersonVisaService(context).load(args.id)
};

const PersonVisasQuery = {
  type: new GraphQLList(PersonVisaType),
  description: "Provides the list of person visas.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 },
    person: {
      type: GraphQLID,
      description: "A global identifier of a person."
    }
  },
  resolve: (root, args, context) => new PersonVisaService(context).list(args)
};

export { PersonVisaQuery, PersonVisasQuery };
