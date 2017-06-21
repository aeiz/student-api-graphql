import { GraphQLEnumType } from "graphql";

const SortByTypeOrAbbreviation = new GraphQLEnumType({
  name: "SortByTypeOrAbbreviation",
  description: "Allowed values for sort parameter",
  values: {
    type: { value: "type" },
    abbreviation: { value: "abbreviation" }
  }
});

export { SortByTypeOrAbbreviation };
