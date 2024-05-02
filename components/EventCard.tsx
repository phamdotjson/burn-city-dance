import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FaLocationDot, FaCalendarDays, FaMoneyBillWave, FaCircleUser, FaTicket, FaInstagram } from "react-icons/fa6";
import { Button } from "./ui/button";
import dayjs from "dayjs";
import { getImageUrlFromS3Bucket } from "@/lib/utils";
import { Event } from "@/types/Event";

const renderFooterContent = ({ TicketLink, OrganiserContact }: Event) => {
  if (TicketLink != undefined) {
    return (
      <CardFooter className="p-0 m-3">
        <div className="flex items-center w-full gap-x-3">
          <Button variant={"default"} className="w-full" size="sm"><FaTicket className="mr-2 h-3.5 w-3.5" />Buy Tickets</Button>
        </div>
      </CardFooter>
    )
  } else {
    return (
      <CardFooter className="p-0 m-3">
        <div className="flex items-center w-full gap-x-3">
          <Button variant={"default"} className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:text-gray-50" size="sm"><FaInstagram className="mr-2 h-3.5 w-3.5" />Contact Organiser</Button>
        </div>
      </CardFooter>
    )
  }
}

const EventCard = (props: Event) => {
  const dateTimeString = `${props.Date}  ${props.StartTime}`;
  const eventDate = dayjs(dateTimeString, 'YYYY-MM-DD HH:mm');

  return (
    <Card className="w-full flex flex-col h-full">
      <div className="flex-grow">
        <CardHeader className={"p-0 m-3 rounded-lg border bg-cover bg-center aspect-square shadow-inner border-ra"} style={{ backgroundImage: `url('${getImageUrlFromS3Bucket(props.ImageName)}')` }}>
          < div className="flex justify-center items-center bg-white w-[3.5rem] aspect-square m-3 rounded-lg" >
            <div className="text-center">
              <p className="font-bold text-xl text-black">{eventDate.date()}</p>
              <p className="text-xs text-red-600 font-semibold">{eventDate.format('MMM').toUpperCase()}</p>
            </div>
          </div >
        </CardHeader >
        {props.Tags && props.Tags.map((t, index) => <Badge key={index} className="ml-3" variant={'eventStyle'}>{t}</Badge>)}
        {props.EventTypes && props.EventTypes.map((et, index) => <Badge key={index} className="ml-3" variant={'eventType'}>{et}</Badge>)}
        <CardContent className="flex flex-col p-0 m-3 gap-y-2">
          <CardTitle className="text-xl">{props.Title}</CardTitle>
          <div className="flex">
            <FaLocationDot className="mr-2" />
            <p className="text-sm font-medium">{props.Location}</p>
          </div>
          <div className="flex">
            <FaCalendarDays className="mr-2" />
            <p className="text-sm font-medium">{eventDate.format('dddd, MMMM D, YYYY')}・{eventDate.format('h:mm A')}</p>
          </div>
          <div className="flex">
            <FaMoneyBillWave className="mr-2" />
            <p className="text-sm font-medium">{props.Price}</p>
          </div>
          <div className="flex">
            <FaCircleUser className="mr-2" />
            <p className="text-sm font-medium">By&nbsp;</p>
            <p className="text-sm font-semibold">{props.Organiser}</p>
          </div>
        </CardContent>
      </div>
      <div className="mt-auto">
        <CardFooter className="p-0 mx-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-3">
            <Button variant="outline" className="w-full" size="sm"><FaCalendarDays className="mr-2 h-3.5 w-3.5" />Add To Calendar</Button>
            <Button variant="outline" className="w-full" size="sm">View Details</Button>
          </div>
        </CardFooter>
        {renderFooterContent(props)}
      </div>
    </Card >
  );
}

export default EventCard;