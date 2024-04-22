import EventCard from "@/components/EventCard";

const page = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-4">
        <EventCard eventName="Waacking Inferno: Vol. 3 - Day 1" organiser="Burncity Waack" location={"Dancehouse"} />
        <EventCard eventName="Popping Nation: Vol. 2 - Round 1" organiser="Jimmy Neutron Zhu" location={"O2 Dance Studio"} />
        <EventCard eventName="Ocean 2 Sky: Choreography Competition" organiser="O2 Dance Studio" location={"O2 Dance Studio"} />
        <EventCard eventName="Boogaloo Workshop - Ahrin Tapat WOW!" organiser="Ahrin Tapat" location={"O2 Dance Studio"} />
      </div>
    </div>

  );
}

export default page;