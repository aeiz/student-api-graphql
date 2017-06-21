import { GraphQLEnumType } from "graphql";

const OrderAscDescArg = new GraphQLEnumType({
  name: "OrderAscDescArgs",
  description: "Allowed values for order parameter",
  values: {
    asc: { value: "asc" },
    desc: { value: "desc" }
  }
});

export { OrderAscDescArg };
