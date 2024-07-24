export const dynamic = 'force-dynamic';

import EventGrid from "@/components/EventGrid";
import RegularEventGrid from "@/components/RegularEventGrid";
import SearchBar from "@/components/SearchBar";
import { getConfirmedEvents } from "@/lib/db";

const page = async () => {
  const events = await getConfirmedEvents();

  return (
    <div className="container">
      <SearchBar />
      <h1 className="text-foreground text-3xl mb-2">Upcoming Events</h1>
      <EventGrid events={events} />
      <h1 className="text-foreground text-3xl py-3">Regular Events (Jams, Training Sessions, etc.)</h1>
      <p className="text-neutral-400 text-sm mb-2">Date corresponds to the upcoming weekday</p>
      <RegularEventGrid />
    </div>
  );
}

export default page;