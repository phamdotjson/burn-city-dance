import { FaCalendarDays, FaClock, FaLocationDot, FaMusic } from "react-icons/fa6";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { BsDot } from "react-icons/bs";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export interface RegularEventCardProps {
  dayOfWeek: string;
  date: string;
}

const RegularEventList = ({ dayOfWeek, date }: RegularEventCardProps) => {
  const events = [
    {
      title: "Can we kick it?",
      location: "IMAX Melbourne",
      time: "6:30 PM",
      music: "Hip-hop"
    },
    {
      title: "Breaking Jam/Training",
      organiser: "Oliver Le",
      location: "RMIT Building 14",
      time: "6:30 PM",
      music: "Breaking"
    },
    {
      title: "O2 Funk Jam",
      organiser: "Jimmy Neutron Zhu",
      location: "O2 Dance Studio",
      time: "9:00 PM",
      music: "Funk"
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{dayOfWeek}</CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        {events.map((event, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row items-center sm:space-x-4 py-2">
              <BsDot className="hidden sm:block text-blue-400" />
              <div className="flex-1">
                <p className="text-sm font-medium leading-none pb-3">
                  {event.title}
                </p>
                <div className="flex text-sm text-neutral-500 dark:text-neutral-400">
                  <FaClock className="mr-3 my-auto" />
                  <p className="my-auto"> {event.time}</p>
                  <FaLocationDot className="mx-3 my-auto" />
                  <p className="my-auto">{event.location}</p>
                  <FaMusic className="mx-3 my-auto" />
                  <p className="my-auto">{event.music}</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="mt-4 md:mt-0"><FaCalendarDays className="mr-2 h-3.5 w-3.5" />Add To Calendar</Button>
            </div>
            <hr className="border-t border-gray-800 my-4" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default RegularEventList;