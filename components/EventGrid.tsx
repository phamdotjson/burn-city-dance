import dayjs from "dayjs";
import EventCard, { EventCardProps } from "./EventCard";

export interface EventGridProps {
  events: EventCardProps[];
};

const EventGrid = ({ events }: EventGridProps) => {

  events.sort((x, y) => dayjs(x.dateTimeUtc).unix() - dayjs(y.dateTimeUtc).unix());

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-3">
      {events.map((e, index) => <EventCard key={index} {...e} />)}
    </div>
  );
}

export default EventGrid;