import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean
} from "graphql";

import { RegionType, SubRegionType } from ".";

const CountryType = new GraphQLObjectType({
  name: "Country",
  description: "Country",
  fields: () => ({
    code: {
      type: GraphQLString,
      description: "The ISO 3166-1 alpha-3 country code"
    },
    title: {
      type: GraphQLString,
      description: "The name of the country, as used in everyday speech"
    },
    postalTitle: {
      type: GraphQLString,
      description: "The name of the country when mail is being addressed" +
        " from an international sender"
    },
    region: {
      type: RegionType,
      description: "Region"
    },
    subRegion: {
      type: SubRegionType,
      description: "Sub-Region"
    },
    locality: {
      type: GraphQLString,
      description: "The name of the city or town"
    },
    postalCode: {
      type: GraphQLString,
      description: "The mailing postal code"
    },
    deliveryPoint: {
      type: GraphQLString,
      description: "A specific set of digits between 00 and 99 assigned to" +
        " every address. When combined with the ZIP + 4 code, the delivery" +
        " point provides a unique identifier for every deliverable address" +
        " served by the US Postal Service"
    },
    carrierRoute: {
      type: GraphQLString,
      description: "A subdivision of a US zipcode"
    },
    correctionDigit: {
      type: GraphQLString,
      description: "A number used to check for errors in a US ZIP code," +
        " delivery point, or carrier route"
    }
  })
});

export { CountryType };
