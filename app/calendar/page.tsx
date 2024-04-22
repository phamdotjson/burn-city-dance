import EventCard, { EventCardProps } from "@/components/EventCard";
import SearchBar from "@/components/SearchBar";
import { EventTagsEnum, EventTypeEnum } from "@/constants/EventEnums";
import dayjs from "dayjs";

const events: EventCardProps[] = [
  {
    eventName: "Waacking Inferno: Vol. 3 - Day 1",
    organiser: "Burncity Waack",
    location: "Dancehouse",
    dateTimeUtc: "2024-12-14T07:00:00.000Z",
    eventTypes: [EventTypeEnum.Battle],
    tags: [EventTagsEnum.Waacking],
    pricingInfo: 'Spectators: $20 | Battlers: $30',
    image: 'waack.jpg',
    ticketLink: "humanitix.com",
    organiserContact: ""
  },
  {
    eventName: "Popping Nation: Vol. 2 - Round 1 Battles",
    organiser: "Jimmy Neutron Zhu",
    location: "O2 Dance Studio",
    dateTimeUtc: "2023-11-12T07:00:00.000Z",
    eventTypes: [EventTypeEnum.Battle],
    tags: [EventTagsEnum.Popping],
    pricingInfo: '$10 Early Bird | $15 @ O2',
    image: 'pn.jpg',
    organiserContact: ""
  },
  {
    eventName: "Ocean 2 Sky: Choreography Competition",
    organiser: "O2 Dance Studio",
    location: "O2 Dance Studio",
    dateTimeUtc: "2024-06-28T08:00:00.000Z",
    eventTypes: [EventTypeEnum.Choreography_Competition, EventTypeEnum.Workshop, EventTypeEnum.Battle],

    image: 'o2s.jpg',
    pricingInfo: "Spectator tickets from $25",
    organiserContact: ""
  },
  {
    eventName: "Boogaloo Workshop - Ahrin Tapat WOW!",
    organiser: "Ahrin Tapat",
    location: "O2 Dance Studio",
    dateTimeUtc: "2024-05-14T07:00:00.000Z",
    eventTypes: [EventTypeEnum.Workshop],
    tags: [EventTagsEnum.Popping],
    image: 'tapat.jpg',
    pricingInfo: "Just buy me KFC",
    ticketLink: "humanitix.com",
    organiserContact: ""
  },
]

const page = () => {
  events.sort((x, y) => dayjs(x.dateTimeUtc).unix() - dayjs(y.dateTimeUtc).unix())
  return (
    <div className="container">
      <div className="flex items-center justify-center p-4">
        <SearchBar />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {events.map(e => <EventCard {...e} />)}
      </div>
    </div>
  );
}

export default page;