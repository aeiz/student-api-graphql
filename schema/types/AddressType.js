import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLString
} from "graphql";

import { CountryType, GeographicAreaType } from ".";
import { GeographicAreaService } from "../../services";

const AddressType = new GraphQLObjectType({
  name: "Address",
  description: "Address",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of the Address (SPRADDR, SOBSBGI)"
    },
    addressLines: {
      type: new GraphQLList(GraphQLString),
      description: "The address lines of the address, such as a street address," +
        " post office box number, or city, region, and postal code"
    },
    place: {
      type: new GraphQLObjectType({
        name: "Place",
        description: "Place",
        fields: () => ({
          country: {
            type: CountryType,
            description: "Country"
          }
        })
      }),
      description: "Place"
    },
    latitude: {
      type: GraphQLString,
      description: "The latitude of the location"
    },
    longitude: {
      type: GraphQLString,
      description: "The longitude of the location"
    },
    geographicAreas: {
      type: new GraphQLList(GeographicAreaType),
      description: "List of Geographic Areas",
      resolve: (root, args, context) =>
        new GeographicAreaService(context).loadMany(
          (root.geographicAreas || Array()).map(function(geographicArea) {
            return geographicArea.id;
          })
        )
    }
  })
});

export { AddressType };
