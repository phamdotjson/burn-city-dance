import EventGrid from "@/components/EventGrid";
import SearchBar from "@/components/SearchBar";
import { getConfirmedEvents } from "@/lib/db";

const page = async () => {
  const events = await getConfirmedEvents();

  return (
    <div className="dark:bg-black">
      <div className="container ">
        <SearchBar />
        <EventGrid events={events} />
      </div>
    </div>

  );
}

export default page;