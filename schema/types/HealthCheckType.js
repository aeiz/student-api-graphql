import { GraphQLObjectType, GraphQLString } from "graphql";

const HealthCheckType = new GraphQLObjectType({
  name: "HealthCheck",
  description: "Retrieves the availability status of the Student API" +
    " application deployed.",
  fields: () => ({
    status: {
      type: GraphQLString,
      description: "Student API application’s status information"
    }
  })
});

export { HealthCheckType };
