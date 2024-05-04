import { FaCalendarDays, FaClock, FaLocationDot, FaMusic } from "react-icons/fa6";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { BsDot } from "react-icons/bs";
import { Button } from "./ui/button";
import { RegularEvent } from "@/types/RegularEvent";

export interface RegularEventCardProps {
  dayOfWeek: string;
  date: string;
  events: RegularEvent[]
}

const RegularEventList = ({ dayOfWeek, date, events }: RegularEventCardProps) => {
  const eventList = (events.length == 0) ? <p>No jams today 😭</p> : events.map((event, index) => (
    <div key={index}>
      <div className="flex flex-col md:flex-row items-center sm:space-x-4 py-2">
        <BsDot className="hidden sm:block text-blue-400" />
        <div className="flex-1">
          <p className="text-sm font-medium leading-none pb-3">
            {event.Title}
          </p>
          <div className="flex text-sm text-neutral-500 dark:text-neutral-400">
            <FaClock className="mr-3 my-auto" />
            <p className="my-auto"> {event.Time}</p>
            <FaLocationDot className="mx-3 my-auto" />
            <p className="my-auto">{event.Location}</p>
            {
              event.Music &&
              <div className="flex">
                <FaMusic className="mx-3 my-auto" />
                <p className="my-auto">{event.Music}</p>
              </div>
            }
          </div>
        </div>
        <Button variant="outline" size="sm" className="mt-4 md:mt-0"><FaCalendarDays className="mr-2 h-3.5 w-3.5" />Add To Calendar</Button>
      </div>
      <hr className="border-t border-gray-800 my-4" />
    </div>
  ))

  return (
    <Card>
      <CardHeader>
        <CardTitle>{dayOfWeek}</CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        {eventList}
      </CardContent>
    </Card>
  );
}

export default RegularEventList;