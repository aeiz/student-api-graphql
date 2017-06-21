import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from "graphql";

import { BuildingType, RoomTypeType, SiteType } from ".";
import { BuildingService, RoomTypeService, SiteService } from "../../services";

const SectionCrossListType = new GraphQLObjectType({
  name: "SectionCrossList",
  description: "Section Cross List",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The global identifier of the Section Crosslists(GORGUID)."
    },
    code: {
      type: GraphQLString,
      description: "The code that identifies the list of cross-listed" +
        " sections (SSBXLST_XLST_GROUP)."
    },
    maxEnrollment: {
      type: GraphQLInt,
      description: "The maximum enrollment of the cross-listed section over" +
        " all included sections."
    },
    maxWaitlist: {
      type: GraphQLInt,
      description: "The maximum number of students allowed in the combined" +
        " wait-list for the cross-listed sections."
    },
    // TODO: sections
    waitlist: {
      type: GraphQLString,
      description: "An indicator specifying if all students are placed on" +
        " the wait-list when any of the cross-listed sections has reached" +
        " its maximum enrollment or only when the combined registration has" +
        " reached the specified maximum enrollment of the cross-list."
    }
  })
});

export { SectionCrossListType };
