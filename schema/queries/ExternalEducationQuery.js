import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { ExternalEducationType } from "../types";
import { ExternalEducationService } from "../../services";

const ExternalEducationQuery = {
  type: ExternalEducationType,
  description: "This API returns an external education record for the given" +
    " id.",
  args: {
    id: {
      type: GraphQLID,
      description: "A global identifier of an external education record"
    }
  },
  resolve: (root, args, context) =>
    new ExternalEducationService(context).load(args.id)
};

const ExternalEducationsQuery = {
  type: new GraphQLList(ExternalEducationType),
  description: "This API returns a list of external education records for" +
    " all students.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 }
  },
  resolve: (root, args, context) =>
    new ExternalEducationService(context).list(args)
};

export { ExternalEducationQuery, ExternalEducationsQuery };
