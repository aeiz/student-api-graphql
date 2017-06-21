import {
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLEnumType
} from "graphql";
import { OrderAscDescArg, SortByCodeOrTitle } from "../types/args";
import { SiteType } from "../types";
import { SiteService } from "../../services";

const SiteQuery = {
  type: SiteType,
  description: "This API returns a site data by given ID.",
  args: {
    id: { type: GraphQLString }
  },
  resolve: (root, args, context) => new SiteService(context).load(args.id)
};

const SitesQuery = {
  type: new GraphQLList(SiteType),
  description: "Retrieves the list of all sites.",
  args: {
    limit: { type: GraphQLInt, defaultValue: 500 },
    offset: { type: GraphQLInt, defaultValue: 0 },
    sort: { type: SortByCodeOrTitle },
    order: { type: OrderAscDescArg }
  },
  resolve: (root, args, context) => new SiteService(context).list(args)
};

export { SiteQuery, SitesQuery };
