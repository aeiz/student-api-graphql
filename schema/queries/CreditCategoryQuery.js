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
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    sort: { // TODO: check if needed
      type: new GraphQLEnumType({
        name: "CreditCategoriesSort",
        description: "Allowed values for sort parameter",
        values: {
          title: { value: "title" }
        }
      })
    },
    order: { type: OrderAscDescArg }
  },
  resolve: (root, args, context) =>
    new CreditCategoryService(context).list(args)
};

export { CreditCategoryQuery, CreditCategoriesQuery };
