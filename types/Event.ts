import { EventTagEnum } from "@/constants/EventEnums";

export type Event = {
  Date: string;
  StartTime: string;
  EventID: string;
  Title: string;
  Description: string;
  Location: string;
  Tags: EventTagEnum[];
  EndTime: string;
  ImageName: string;
  Price: string;
  TicketLink?: string;
  Organiser: string;
  OrganiserContact: string;
  Status: string;
};