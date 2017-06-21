import { GraphQLEnumType } from "graphql";

const SortByCode = new GraphQLEnumType({
  name: "SortByCode",
  description: "Allowed values for sort parameter",
  values: {
    code: { value: "code" },
  }
});

export { SortByCode };
