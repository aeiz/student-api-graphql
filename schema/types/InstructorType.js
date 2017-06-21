import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";
import {
  InstructorCategoryType,
  InstructorStaffTypeType,
  InstructorTenureTypeType,
  RoomType
} from ".";
import {
  InstructorCategoryService,
  InstructorStaffTypeService,
  InstructorTenureTypeService,
  RoomService
} from "../../services";

// TODO: finish type definition
const InstructorType = new GraphQLObjectType({
  name: "Instructor",
  description: "Instructor",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of the instructor."
    },
    // TODO: institutionalUnits (GraphQLList?)
    primaryLocationId: {
      type: GraphQLID,
      description: "The global identifier for the Primary Location.",
      resolve: (root, args, context) => root.primaryLocation.id
    },
    primaryLocation: {
      type: RoomType, // TODO: Verify that this is actually a room type.
      description: "Primary Location",
      resolve: (root, args, context) =>
        new RoomService(context).load(root.primaryLocation.id)
    },
    categoryId: {
      type: GraphQLID,
      description: "The global identifier for the Category.",
      resolve: (root, args, context) => root.category.id
    },
    category: {
      type: InstructorCategoryType,
      description: "Instructor Category",
      resolve: (root, args, context) =>
        new InstructorCategoryService(context).load(root.category.id)
    },
    staffTypeId: {
      type: GraphQLID,
      description: "The global identifier for the Staff Type.",
      resolve: (root, args, context) => root.staffType.id
    },
    staffType: {
      type: InstructorStaffTypeType,
      description: "Instructor Staff Type",
      resolve: (root, args, context) =>
        new InstructorStaffTypeService(context).load(root.staffType.id)
    },
    tenure: {
      type: new GraphQLObjectType({
        name: "InstructorTenure",
        description: "Instructor Tenure",
        fields: () => ({
          typeId: {
            type: GraphQLID,
            description: "The global identifier of the instructor tenure" +
              " type.",
            resolve: (root, args, context) => root.tenure.type.id
          },
          type: {
            type: InstructorTenureTypeType,
            description: "Instructor Tenure Type",
            resolve: (root, args, context) =>
              new InstructorTenureTypeService(context).load(root.tenure.type.id)
          },
          startOn: {
            type: GraphQLString,
            description: "The date when tenure was awarded to the instructor."
          },
          reviewedOn: {
            type: GraphQLString,
            description: "The date the instructor was last reviewed for" +
              " tenure."
          }
        })
      })
    }
  })
});

export { InstructorType };
