import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} from "graphql";

const AcademicDisciplineType = new GraphQLObjectType({
  name: "AcademicDiscipline",
  description: "Academic Discipline",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "A global identifier for an academic discipline."
    },
    abbreviation: {
      type: GraphQLString,
      description: "An abbreviation that identifies an academic discipline" +
        " (STVMAJR)."
    },
    title: {
      type: GraphQLString,
      description: "The full name of an academic discipline."
    },
    type: {
      type: GraphQLString,
      description: "A type of academic discipline such as 'minor'," +
        " 'major' and 'concentration'."
    },
    // TODO: fix reporting
    reporting: {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: "AcademicDisciplineReportingDetails",
          description: "ReportingDetails",
          fields: () => ({
            countryCode: {
              type: GraphQLString,
              description: "The ISO 3166 alpha-3 country code for the" +
                " United States of America.",
              resolve: (root, args, context) =>
                function(root) {
                  console.log(root);
                  return root.code ? root.code : null;
                }
            },
            cipCode: {
              type: GraphQLString,
              description: "The discipline code in the Classification of" +
                " Instructional Programs (CIP).",
              resolve: (root, args, context) =>
                root.country ? root.country.cipCode : null
            }
          })
        })
      ),
      description: "Reporting"
    }
  })
});

export { AcademicDisciplineType };
