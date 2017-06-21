import { GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { EnrollmentStatusType } from "../types";
import { EnrollmentStatusService } from "../../services";

const EnrollmentStatusQuery = {
  type: EnrollmentStatusType,
  description: "This API returns the details of a specific enrollment" +
    " status by the given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "The global identifier of an enrollment status for" +
        " use in all external references to an enrollment status(GORGUID)."
    }
  },
  resolve: (root, args, context) =>
    new EnrollmentStatusService(context).load(args.id)
};

const EnrollmentStatusesQuery = {
  type: new GraphQLList(EnrollmentStatusType),
  description: "This API returns the list of active enrollment statuses.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt }
  },
  resolve: (root, args, context) =>
    new EnrollmentStatusService(context).list(args)
};

export { EnrollmentStatusQuery, EnrollmentStatusesQuery };
