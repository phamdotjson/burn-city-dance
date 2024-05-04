import dayjs from "dayjs";
import RegularEventCard from "./RegularEventCard";
import { RegularEvent } from "@/types/RegularEvent";

const RegularEventGrid = () => {
  const today = dayjs();
  const daysUntilNextMonday = (8 - today.day()) % 7;
  const nextMonday = today.add(daysUntilNextMonday, 'day');

  const events: RegularEvent[] = [
    {
      Title: "Can we kick it?",
      Location: "IMAX Melbourne",
      Time: "6:30 PM",
      Music: "Hip-hop",
      DayOfWeek: 1
    },
    {
      Title: "Breaking Jam/Training",
      Location: "RMIT Building 14",
      Time: "6:30 PM",
      DayOfWeek: 1
    },
    {
      Title: "O2 Funk Jam",
      Location: "O2 Dance Studio",
      Time: "9:00 PM",
      Music: "Funk",
      DayOfWeek: 1
    },
    {
      Title: "Ladies' Hip-hop Jam",
      Location: "IMAX Melbourne",
      Time: "6:30 PM",
      Music: "Hip-hop",
      DayOfWeek: 2
    },
    {
      Title: "Funk Jam",
      Location: "IMAX Melbourne",
      Time: "6:30 PM",
      Music: "Funk",
      DayOfWeek: 2
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-3">
      <RegularEventCard dayOfWeek={"Monday"} date={nextMonday.format("MMM DD, YYYY")} events={events.filter((e => e.DayOfWeek == 1))} />
      <RegularEventCard dayOfWeek={"Tuesday"} date={nextMonday.add(1, 'day').format("MMM DD, YYYY")} events={events.filter((e => e.DayOfWeek == 2))} />
      <RegularEventCard dayOfWeek={"Wednesday"} date={nextMonday.add(2, 'day').format("MMM DD, YYYY")} events={events.filter((e => e.DayOfWeek == 3))} />
      <RegularEventCard dayOfWeek={"Thursday"} date={nextMonday.add(3, 'day').format("MMM DD, YYYY")} events={events.filter((e => e.DayOfWeek == 4))} />
      <div className="col-span-1 md:col-span-2">
        <RegularEventCard dayOfWeek={"Friday"} date={nextMonday.add(4, 'day').format("MMM DD, YYYY")} events={events.filter((e => e.DayOfWeek == 5))} />
      </div>

    </div>
  );
}

export default RegularEventGrid;