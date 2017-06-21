import { GraphQLID, GraphQLList } from "graphql";
import { EthnicityType } from "../types";
import { EthnicityService } from "../../services";

const EthnicityQuery = {
  type: EthnicityType,
  args: {
    id: {
      type: GraphQLID,
      description: "Globally-unique identifier of the new ethnicity" +
        " defined by U.S government. The valid values are Not Hispanic" +
        " and Hispanic (GORGUID_GUID)"
    }
  },
  resolve: (root, args, context) => new EthnicityService(context).load(args.id)
};

const EthnicitiesQuery = {
  type: new GraphQLList(EthnicityType),
  args: {},
  resolve: (root, args, context) => new EthnicityService(context).list({})
};

export { EthnicityQuery, EthnicitiesQuery };
