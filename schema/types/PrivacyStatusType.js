import { GraphQLObjectType, GraphQLString } from "graphql";

const PrivacyStatusType = new GraphQLObjectType({
  name: "PrivacyStatus",
  description: "Privacy Status",
  fields: () => ({
    privacyCategory: {
      type: GraphQLString,
      description: "The global category of information privacy protection."
    }
    // TODO: privacy category type?
  })
});

export { PrivacyStatusType };
