import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLBoolean
} from "graphql";

const MeetingTimeType = new GraphQLObjectType({
  name: "MeetingTime",
  description: "Meeting Time",
  fields: () => ({
    beginTime: {
      type: GraphQLString,
      description: "Field that identifies the begin time of the course" +
        " section being scheduled"
    },
    building: {
      type: GraphQLString,
      description: "Field that identifies building code meets in"
    },
    buildingDescription: {
      type: GraphQLString,
      description: "Field that identifies the building associated with the" +
        " building code"
    },
    campus: {
      type: GraphQLString,
      description: "Field that identifies the campus code in which the" +
        " building is located"
    },
    campusDescription: {
      type: GraphQLString,
      description: "Field that identifies the campus associated with the" +
        " campus code"
    },
    creditHourSession: {
      type: GraphQLString,
      description: "Field that identifies the session credit hours"
    },
    endDate: {
      type: GraphQLString,
      description: "Field that identifies section end date"
    },
    endTime: {
      type: GraphQLString,
      description: "Field that identifies the End Time of the course section" +
        " being scheduled"
    },
    hoursWeek: {
      type: GraphQLFloat,
      description: "Field that identifies section meeting hours per week"
    },
    meetingScheduleType: {
      type: GraphQLString,
      description: "Field that identifies meeting schedule type code"
    },
    room: {
      type: GraphQLString,
      description: "Field that identifies the room where the course section" +
        " will be scheduled"
    },
    startDate: {
      type: GraphQLString,
      description: "Field that identifies section meeting start date"
    },
    monday: {
      type: GraphQLBoolean,
      description: "Field that identifies section meeting time Monday" +
        " indicator"
    },
    tuesday: {
      type: GraphQLBoolean,
      description: "Field that identifies section meeting time Tuesday" +
        " indicator"
    },
    wednesday: {
      type: GraphQLBoolean,
      description: "Field that identifies section meeting time Wednesday" +
        " indicator"
    },
    thursday: {
      type: GraphQLBoolean,
      description: "Field that identifies section meeting time Thrusday" +
        " indicator"
    },
    friday: {
      type: GraphQLBoolean,
      description: "Field that identifies section meeting time Friday" +
        " indicator"
    },
    saturday: {
      type: GraphQLBoolean,
      description: "Field that identifies section meeting time Saturday" +
        " indicator"
    },
    sunday: {
      type: GraphQLBoolean,
      description: "Field that identifies section meeting time Sunday" +
        " indicator"
    }
  })
});

export { MeetingTimeType };
