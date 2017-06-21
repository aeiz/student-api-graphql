import { GraphQLEnumType } from "graphql";

const SortByTitleOrAbbreviation = new GraphQLEnumType({
  name: "SortByTitleOrAbbreviation",
  description: "Allowed values for sort parameter",
  values: {
    title: { value: "title" },
    abbreviation: { value: "abbreviation" }
  }
});

export { SortByTitleOrAbbreviation };
