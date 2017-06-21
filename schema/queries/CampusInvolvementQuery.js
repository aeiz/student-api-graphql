import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { CampusInvolvementType } from "../types";
import { CampusInvolvementService } from "../../services";

const CampusInvolvementQuery = {
  type: CampusInvolvementType,
  description: "Returns the student and their activities, sports and" +
    " committees for a given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "The global identifier of the campus involvements" +
        " resource (SGRSACT, SGRSPRT and SHRCOMM)"
    }
  },
  resolve: (root, args, context) =>
    new CampusInvolvementService(context).load(args.id)
};

const CampusInvolvementsQuery = {
  type: new GraphQLList(CampusInvolvementType),
  description: "Provide the list of student and their activities," +
    " sports and committees in Banner.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 }
  },
  resolve: (root, args, context) =>
    new CampusInvolvementService(context).list(args)
};

export { CampusInvolvementQuery, CampusInvolvementsQuery };
