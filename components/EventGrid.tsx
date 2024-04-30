import EventCard from "./EventCard";
import { sortEventsByDateTime } from "@/lib/utils";
import { getConfirmedEvents } from "@/lib/db";

const EventGrid = async () => {
  const events = await getConfirmedEvents();
  const sortedEvents = sortEventsByDateTime(events);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-3">
      {sortedEvents.map((e, index) => <EventCard key={index} {...e} />)}
    </div>
  );
}

export default EventGrid;