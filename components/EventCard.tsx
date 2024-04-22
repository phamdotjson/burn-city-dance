import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FaLocationDot, FaCalendarDays, FaMoneyBillWave, FaCircleUser, FaTicket } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { Button } from "./ui/button";

export interface EventCardProps {
  eventName: string;
  organiser: string;
  location: string;
}

const EventCard = (props: EventCardProps) => {
  return (
    <Card className="w-full">
      <CardHeader className="p-0 m-3 rounded-lg border bg-[url('/waack.jpg')] bg-cover bg-center aspect-square shadow-inner border-ra">
        <div className="flex justify-center items-center bg-white w-[3.5rem] aspect-square m-3 rounded-lg">
          <div className="text-center">
            <p className="font-bold text-xl">14</p>
            <p className="text-xs text-red-600 font-semibold">DEC</p>
          </div>
        </div>
      </CardHeader>
      <Badge className="ml-3" variant={'eventType'}>Battle</Badge>
      <Badge className="ml-3" variant={'eventStyle'}>Waacking</Badge>
      <CardContent className="flex flex-col p-0 m-3 gap-y-2">

        <CardTitle className="text-xl">{props.eventName}</CardTitle>
        <div className="flex">
          <FaLocationDot className="mr-2" />
          <p className="text-sm font-medium">{props.location}</p>
        </div>
        <div className="flex">
          <FaCalendarDays className="mr-2" />
          <p className="text-sm font-medium">Saturday, December 14, 2024</p>
          <LuDot />
          <p className="text-sm font-medium">06:00 PM</p>
        </div>
        <div className="flex">
          <FaMoneyBillWave className="mr-2" />
          <p className="text-sm font-medium">Spectators: $20 | Battlers: $30</p>
        </div>
        <div className="flex">
          <FaCircleUser className="mr-2" />
          <p className="text-sm font-medium">By&nbsp;</p>
          <p className="text-sm font-semibold">{props.organiser}</p>
        </div>
      </CardContent>
      <CardFooter className="p-0 m-3">
        <div className="flex items-center w-full gap-x-3">
          <Button variant="outline" className="w-full"><FaCalendarDays className="mr-2 h-3.5 w-3.5" />Add To Calendar</Button>
          <Button variant="outline" className="w-full" >View Details</Button>
        </div>
      </CardFooter>
      <CardFooter className="p-0 m-3">
        <div className="flex items-center w-full gap-x-3">
          <Button variant={"default"} className="w-full"><FaTicket className="mr-2 h-3.5 w-3.5" />Buy Tickets</Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default EventCard;