import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const RoomCharacteristicType = new GraphQLObjectType({
  name: "RoomCharacteristic",
  description: "Room Characteristic",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of the Room Characteristic"
    },
    code: {
      type: GraphQLString,
      description: "The code that identifies the Room Characteristic"
    },
    title: {
      type: GraphQLString,
      description: "The full name of the Room Characteristic"
    }
  })
});

export { RoomCharacteristicType };
