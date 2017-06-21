import { GraphQLString, GraphQLList, GraphQLInt } from "graphql";
import { RoomCharacteristicType } from "../types";
import { RoomCharacteristicService } from "../../services";

const RoomCharacteristicQuery = {
  type: RoomCharacteristicType, // TODO: Should this be a GraphQLList?
  description: "This API returns the room characteristics data by" +
    " given Id.",
  args: {
    id: {
      type: GraphQLString,
      description: "The global identifier of the Room Characteristic"
    }
  },
  resolve: (root, args, context) =>
    new RoomCharacteristicService(context).load(args.id)
};

const RoomCharacteristicsQuery = {
  type: new GraphQLList(RoomCharacteristicType),
  description: "Provides the list of all room characteristics.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt }
  },
  resolve: (root, args, context) =>
    new RoomCharacteristicService(context).list(args)
};

export { RoomCharacteristicQuery, RoomCharacteristicsQuery };
