import { GraphQLEnumType } from "graphql";

const SortByCodeOrTitle = new GraphQLEnumType({
  name: "SortByCodeOrTitle",
  description: "Allowed values for sort parameter",
  values: {
    code: { value: "code" },
    title: { value: "title" }
  }
});

export { SortByCodeOrTitle };
