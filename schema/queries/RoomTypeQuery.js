import {
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLEnumType
} from "graphql";
import { RoomTypeType } from "../types";
import { RoomTypeService } from "../../services";

const RoomTypeQuery = {
  type: RoomTypeType,
  description: "This API returns a room type data by given ID",
  args: {
    id: {
      type: GraphQLString,
      description: "A globally unique identifier of a room type."
    }
  },
  resolve: (root, args, context) => new RoomTypeService(context).load(args.id)
};

const RoomTypesQuery = {
  type: new GraphQLList(RoomTypeType),
  description: "Retrieves the list of all sites.",
  args: {},
  resolve: (root, args, context) => new RoomTypeService(context).list({})
};

export { RoomTypeQuery, RoomTypesQuery };
