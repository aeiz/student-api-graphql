import { GraphQLEnumType } from "graphql";

const SortByType = new GraphQLEnumType({
  name: "SortByType",
  description: "Allowed values for sort parameter",
  values: {
    type: { value: "type" },
  }
});

export { SortByType };
