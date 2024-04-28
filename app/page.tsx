import EventGrid from "@/components/EventGrid";
import SearchBar from "@/components/SearchBar";
import { getEvents } from "@/lib/utils";

const page = async () => {
  const events = await getEvents();
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