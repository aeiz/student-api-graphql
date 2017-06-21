import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const EthnicityType = new GraphQLObjectType({
  name: "Ethnicity",
  description: "Ethnicity",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "Globally-unique identifier of the new ethnicity defined" +
        " by U.S government. The valid values are Not Hispanic and Hispanic" +
        " (GORGUID_GUID)"
    },
    title: {
      type: GraphQLString,
      description: "The ethnic code defined by the U.S. government. Valid" +
        " values are Hispanic or Latino, Not Hispanic or Latino"
    },
    reporting: {
      type: new GraphQLObjectType({
        name: "ReportingDetails",
        description: "ReportingDetails",
        fields: () => ({
          country: {
            name: "Country",
            type: new GraphQLObjectType({
              name: "CountryDetails",
              description: "Country Details",
              fields: () => ({
                code: {
                  type: GraphQLString,
                  description: "The code of country (USA)"
                },
                ethnicCategory: {
                  type: GraphQLString,
                  description: "The global category of ethnic origin to which" +
                    " a person belongs. Valid values are nonHispanic, hispanic"
                }
              })
            })
          }
        })
      }),
      description: "Reporting"
    }
  })
});

export { EthnicityType };
