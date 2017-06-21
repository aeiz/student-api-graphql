import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const SectionGradeTypeType = new GraphQLObjectType({
  name: "SectionGradeType",
  description: "Section Grade Type",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "Globally-unique identifier of the section grade type"
    },
    title: {
      type: GraphQLString,
      description: "The section grade type defined. The valid values are" +
        " 'Midterm' and 'Final'."
    }
  })
});

export { SectionGradeTypeType };
