import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} from 'graphql';

const EducationalInstitutionType = new GraphQLObjectType({
  name: 'EducationalInstitution',
  description: 'Educational Institution',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'The global identifier of the institution'
    },
    title: {
      type: GraphQLString,
      description: 'The full name of the institution from tables STVSBGI, GUBINST'
    },
    type: {
      type: GraphQLString,
      description: 'The type of the institution'
    },
    homeInstitution: {
      type: GraphQLString,
      description: "Indicates if this is a 'home' or 'external' institution'"
    },
    //addresses
    // TODO: link to address and address type types
    // TODO: fix
    /*
    addresses: {
      name: 'EducationalInstitutionAddressList',
      type: new GraphQLList({
        name: 'EducationalInstitutionAddressListEntry',
        description: 'Address List Entry',
        fields: () => ({
          address: {
            type: new GraphQLObjectType({
              name: 'EducationalInstitutionAddressListEntryAddress',
              description: 'Address List Entry Address',
              fields: () => ({
                id: {
                  type: GraphQLString,
                  description: 'The global identifier for the Address.'
                }
              })
            }),
            description: 'Address List Entry Address'
          },
          type: {
            type: new GraphQLObjectType({
              name: 'EducationalInstitutionAddressListEntryAddressType',
              description: 'Address List Entry Address Type',
              fields: () => ({
                detail: {
                  type: new GraphQLObjectType({
                    name: 'EducationalInstitutionAddressListEntryAddressTypeDetail',
                    description: 'Address List Entry Address Type Detail',
                    fields: () => ({
                      id: {
                        type: GraphQLString,
                        description: 'The global identifier for type of address for a person'
                      }
                    })
                  }),
                  description: 'Address List Entry Address Type Detail'
                }
              })
            }),
            description: 'Address List Entry Type'
          },
        })
      }),
      description: 'Address List'
    },
    */

  }),
});

export { EducationalInstitutionType };
