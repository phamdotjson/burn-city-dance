import EventGrid from "@/components/EventGrid";
import SearchBar from "@/components/SearchBar";

const page = () => {
  return (
    <div className="dark:bg-black">
      <div className="container ">
        <SearchBar />
        <EventGrid />
      </div>
    </div>

  );
}

export default page;