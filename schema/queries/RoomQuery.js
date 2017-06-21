import { GraphQLString, GraphQLList, GraphQLInt } from "graphql";
import { RoomType } from "../types";
import { RoomService } from "../../services";

const RoomQuery = {
  type: RoomType,
  description: "This API returns a room data by given ID.",
  args: {
    id: {
      type: GraphQLString,
      description: "Globally unique identifier of the room (SLBRDEF)"
    }
  },
  resolve: (root, args, context) => new RoomService(context).load(args.id)
};

const RoomsQuery = {
  type: new GraphQLList(RoomType),
  description: "This API returns list of rooms.",
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    // Add enum type for sort and order options
    sort: { type: GraphQLString },
    order: { type: GraphQLString },
    type: { type: GraphQLString }
  },
  resolve: (root, args, context) => new RoomService(context).list(args)
};

export { RoomQuery, RoomsQuery };
