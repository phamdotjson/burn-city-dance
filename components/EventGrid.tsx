import dayjs from "dayjs";
import EventCard from "./EventCard";
import { Event } from "@/types/Event";
import { sortEventsByDateTime } from "@/lib/utils";

export interface EventGridProps {
  events: Event[];
};

const EventGrid = ({ events }: EventGridProps) => {

  const sortedEvents = sortEventsByDateTime(events);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-3">
      {sortedEvents.map((e, index) => <EventCard key={index} {...e} />)}
    </div>
  );
}

export default EventGrid;