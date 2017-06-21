import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} from "graphql";

import { BuildingType, RoomTypeType, SiteType } from ".";
import { BuildingService, RoomTypeService, SiteService } from "../../services";

const RoomType = new GraphQLObjectType({
  name: "Room",
  description: "Room",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A global identifier of a room to be used in all external" +
        " references to the room(SLBRDEF)."
    },
    title: {
      type: GraphQLString,
      description: "The full name of a room."
    },
    number: {
      type: GraphQLString,
      description: "A numbering scheme to distinguish different buildings," +
        " floors, and rooms located in the same site. Typically this is a" +
        " string."
    },
    occupancies: {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: "RoomOccupancy",
          description: "Room Occupancy",
          fields: () => ({
            maxOccupancy: {
              type: GraphQLString,
              description: "The maximum number of persons who may occupy a" +
                " Room arranged in a given layout"
            },
            type: {
              type: GraphQLString,
              description: "For rooms with multiple layout, this can be" +
                " used. Default value is 'classroom'."
            }
          })
        })
      ),
      description: "List of Room Occupancies"
    },
    roomTypes: {
      type: new GraphQLList(RoomTypeType),
      description: "List of Room Types",
      resolve: (root, args, context) =>
        new RoomTypeService(context).loadMany(
          (root.roomTypes || Array()).map(function(roomType) {
            return roomType.detail.id;
          })
        )
    },
    buildingId: {
      type: GraphQLID,
      description: "The global identifier for Building.",
      resolve: (root, args, context) =>
        root.building ? root.building.id : null
    },
    building: {
      type: BuildingType,
      description: "Building",
      resolve: (root, args, context) =>
        new BuildingService(context).load(root.building.id)
    },
    siteId: {
      type: GraphQLID,
      description: "The global identifier of the institution's site.",
      resolve: (root, args, context) => root.site.id
    },
    site: {
      type: SiteType,
      description: "Site",
      resolve: (root, args, context) =>
        new SiteService(context).load(root.site.id)
    }
  })
});

export { RoomType };
