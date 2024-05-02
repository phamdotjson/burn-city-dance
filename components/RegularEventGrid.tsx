import dayjs from "dayjs";
import RegularEventCard from "./RegularEventCard";

const RegularEventGrid = () => {
  const today = dayjs();
  const daysUntilNextMonday = (8 - today.day()) % 7;
  const nextMonday = today.add(daysUntilNextMonday, 'day');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-3">
      <RegularEventCard dayOfWeek={"Monday"} date={nextMonday.format("MMM DD, YYYY")} />
      <RegularEventCard dayOfWeek={"Tuesday"} date={nextMonday.add(1, 'day').format("MMM DD, YYYY")} />
      <RegularEventCard dayOfWeek={"Wednesday"} date={nextMonday.add(2, 'day').format("MMM DD, YYYY")} />
      <RegularEventCard dayOfWeek={"Thursday"} date={nextMonday.add(3, 'day').format("MMM DD, YYYY")} />
      <div className="col-span-1 md:col-span-2">
        <RegularEventCard dayOfWeek={"Friday"} date={nextMonday.add(4, 'day').format("MMM DD, YYYY")} />
      </div>

    </div>
  );
}

export default RegularEventGrid;