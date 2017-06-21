import { GraphQLEnumType } from "graphql";

const SortByLastNameOrFirstName = new GraphQLEnumType({
  name: "SortByLastNameOrFirstName",
  description: "Allowed values for sort parameter",
  values: {
    lastName: { value: "lastName" },
    firstName: { value: "firstName" }
  }
});

export { SortByLastNameOrFirstName };
