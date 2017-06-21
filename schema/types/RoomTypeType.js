import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const RoomTypeType = new GraphQLObjectType({
  name: "RoomType",
  description: "Room Type",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A globally unique identifier of a room type."
    },
    title: {
      type: GraphQLString,
      description: "The full name of a room type."
    },
    type: {
      type: GraphQLString,
      description: "The type or style of a room's layout. Valid value is" +
        " classroom."
    }
  })
});

export { RoomTypeType };
