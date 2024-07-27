import { EventStatusEnum } from "@/constants/EventEnums";
import { Event } from "@/types/Event";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { QueryCommand } from "@aws-sdk/lib-dynamodb";

const accessKey = process.env.ACCESS_KEY_ID as string;
const secretAccessKey = process.env.SECRET_ACCESS_KEY as string;
const region = process.env.AWS_REGION as string;

const dbClient = new DynamoDBClient({
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey,
  },
  region: region
});

export const getConfirmedEvents = async () => {
  const params = {
    TableName: 'burn-city-dance-events',
    IndexName: 'Status-index',
    KeyConditionExpression: '#status = :statusVal',
    ExpressionAttributeNames: {
      '#status': 'Status',
      '#date': 'Date',
      '#location': 'Location'
    },
    ExpressionAttributeValues: {
      ':statusVal': EventStatusEnum.Confirmed
    },
    ProjectionExpression: '#date, StartTime, EventID, Title, Description, #location, Tags, EndTime, ImageName, Price, TicketLink, Organiser, OrganiserContact, #status'
  };

  const queryCommand = new QueryCommand(params);

  try {
    const data = await dbClient.send(queryCommand);
    const events = data.Items?.map((item: any) => {
      item.Tags = item.Tags ? Array.from(item.Tags.values()) : [];
      return item;
    });

    return events as Event[];
  } catch (error) {
    return []
  }
}