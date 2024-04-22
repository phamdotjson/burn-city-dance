import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FaLocationDot, FaCalendarDays, FaMoneyBillWave, FaCircleUser, FaTicket, FaInstagram } from "react-icons/fa6";
import { Button } from "./ui/button";
import { EventTagsEnum, EventTypeEnum } from "@/constants/EventEnums";
import dayjs from "dayjs";
import { cn } from "@/lib/utils";

export interface EventCardProps {
  eventName: string;
  organiser: string;
  organiserContact: string;
  location: string;
  dateTimeUtc: string;
  eventTypes: EventTypeEnum[];
  tags?: EventTagsEnum[];
  pricingInfo: string;
  image: string;
  ticketLink?: string;
}

const renderFooterContent = ({ ticketLink, organiserContact }: EventCardProps) => {
  if (ticketLink != undefined) {
    return (
      <CardFooter className="p-0 m-3">
        <div className="flex items-center w-full gap-x-3">
          <Button variant={"default"} className="w-full"><FaTicket className="mr-2 h-3.5 w-3.5" />Buy Tickets</Button>
        </div>
      </CardFooter>
    )
  } else {
    return (
      <CardFooter className="p-0 m-3">
        <div className="flex items-center w-full gap-x-3">
          <Button variant={"default"} className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"><FaInstagram className="mr-2 h-3.5 w-3.5" />Contact Organiser</Button>
        </div>
      </CardFooter>
    )
  }
}

const EventCard = (props: EventCardProps) => {
  const eventDate = dayjs(props.dateTimeUtc);
  const bgImageClass = `bg-[url('/${props.image}')]`

  return (
    <Card className="w-full">
      <CardHeader className={cn("p-0 m-3 rounded-lg border bg-cover bg-center aspect-square shadow-inner border-ra", bgImageClass)}>
        <div className="flex justify-center items-center bg-white w-[3.5rem] aspect-square m-3 rounded-lg">
          <div className="text-center">
            <p className="font-bold text-xl">{eventDate.date()}</p>
            <p className="text-xs text-red-600 font-semibold">{eventDate.format('MMM').toUpperCase()}</p>
          </div>
        </div>
      </CardHeader>
      {props.tags && props.tags.map(t => <Badge className="ml-3" variant={'eventStyle'}>{t}</Badge>)}
      {props.eventTypes.map(et => <Badge className="ml-3" variant={'eventType'}>{et}</Badge>)}
      <CardContent className="flex flex-col p-0 m-3 gap-y-2">
        <CardTitle className="text-xl">{props.eventName}</CardTitle>
        <div className="flex">
          <FaLocationDot className="mr-2" />
          <p className="text-sm font-medium">{props.location}</p>
        </div>
        <div className="flex">
          <FaCalendarDays className="mr-2" />
          <p className="text-sm font-medium">{eventDate.format('dddd, MMMM D, YYYY')}・{eventDate.format('h:mm A')}</p>
        </div>
        <div className="flex">
          <FaMoneyBillWave className="mr-2" />
          <p className="text-sm font-medium">{props.pricingInfo}</p>
        </div>
        <div className="flex">
          <FaCircleUser className="mr-2" />
          <p className="text-sm font-medium">By&nbsp;</p>
          <p className="text-sm font-semibold">{props.organiser}</p>
        </div>
      </CardContent>
      <CardFooter className="p-0 m-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-3">
          <Button variant="outline" className="w-full"><FaCalendarDays className="mr-2 h-3.5 w-3.5" />Add To Calendar</Button>
          <Button variant="outline" className="w-full" >View Details</Button>
        </div>
      </CardFooter>
      {renderFooterContent(props)}

    </Card>
  );
}

export default EventCard;