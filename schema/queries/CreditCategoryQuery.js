import { GraphQLID, GraphQLList, GraphQLInt, GraphQLEnumType } from "graphql";
import { OrderAscDescArg } from "../types/args";
import { CreditCategoryType } from "../types";
import { CreditCategoryService } from "../../services";

const CreditCategoryQuery = {
  type: CreditCategoryType,
  description: "This API returns credit category data by given ID.",
  args: {
    id: {
      type: GraphQLID,
      description: "A global identifier of a credit category."
    }
  },
  resolve: (root, args, context) =>
    new CreditCategoryService(context).load(args.id)
};

const CreditCategoriesQuery = {
  type: new GraphQLList(CreditCategoryType),
  description: "Provides the list of credit categories.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 }
  },
  resolve: (root, args, context) =>
    new CreditCategoryService(context).list(args)
};

export { CreditCategoryQuery, CreditCategoriesQuery };
