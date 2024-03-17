"use client";

// pages/events/[id].js
import { useRouter } from "next/router";
import Homerapper from "@/components/Homewrapper";
import Tickets from "@/components/TicketBuying/Tickets";
import { IoCalendar } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const EventDetails = () => {
  // const router = useRouter();

  // Placeholder data - you might want to fetch this data from an API or your server
  const event = {
    event_title: "Example Music Festival",
    event_date: "March 20, 2024",
    event_time: "5:00 PM",
    event_location: "Example Venue, 123 Example Street, Example City, EX 12345",
    event_description:
      "The annual Example Music Festival is back, promising an unforgettable night under the stars at the iconic Example Venue. This year, we're featuring an even more diverse lineup of artists across multiple genres, from rock and indie to electronic and hip-hop, ensuring there's something for every music lover. Beyond the music, explore a myriad of food stalls offering gourmet street food from around the globe, interactive art installations that challenge and intrigue, and a dedicated chill-out zone for when you need a moment away from the crowd. With sustainability at our core, we're committed to a zero-waste policy, eco-friendly practices, and supporting local businesses. Whether you're a festival veteran or a first-timer, prepare for an extraordinary experience filled with music, art, and community. Don't miss out on the highlight of this year's music calendar!",
    organizer_information: {
      name: "Example Organizer",
      email: "email@example.com",
      phone: "(123) 456-7890",
    },
    ticket_information:
      "Tickets start at $50, available at examplewebsite.com/tickets. Early bird specials and VIP packages are also available for a limited time.",
    categories_tags: [
      "Music",
      "Festival",
      "Outdoor",
      "Art",
      "Food",
      "Sustainability",
    ],
    event_url: "examplewebsite.com/event-details",
  };

  return (
    <Homerapper>
      <div className="flex-1  flex flex-col  w-full items-center pt-20  ">
        <div className="w-11/12  flex justify-center lg:p-12 lg:pt-24 pt-24  space-y-4">
          {/* image */}
          <img src="../../background/main.jpg" className="w-11/12 rounded-xl" />
        </div>

        {/* event details */}
        <div className="w-full flex p-4 flex-col space-y-6  items-center">
          <div className="w-11/12 md:w-10/12  lg:w-9/12 flex  ">
            <h1 className="text-4xl font-semibold">{event.event_title}</h1>
          </div>

          {/* time and date */}
          <div className="w-11/12 md:w-10/12  lg:w-9/12 flex  flex-col">
            <h1 className="text-lg font-semibold">Date and time</h1>
            <h1 className="text-lg font-light flex items-center space-x-4">
              <span>
                <IoCalendar />
              </span>
              {event.event_date}
            </h1>
            <h1 className="text-lg font-light flex items-center space-x-4">
              <span>

              <FaClock />
              </span>

              {event.event_time}
            </h1>
          </div>
          {/* Location */}
          <div className="w-11/12 md:w-10/12  lg:w-9/12 flex  flex-col">
            <h1 className="text-lg font-semibold">Location</h1>
            <h1 className="text-lg font-light flex items-center space-x-4">
              <FaLocationDot />
                   {" "} {event.event_location}
            </h1>
          </div>
          {/* Descritpion */}
          <div className="w-11/12 md:w-10/12  lg:w-9/12 flex  flex-col">
            <h1 className="text-lg font-semibold">About Event</h1>
            <h1 className="text-lg font-light">{event.event_description}</h1>
          </div>
          {/* Organizers Info */}
          <div className="w-11/12 md:w-10/12  lg:w-9/12 flex  flex-col">
            <h1 className="text-lg font-semibold">Organizers Info</h1>
            <div>
              <h1 className="text-lg font-light">
                {event.organizer_information.name}
              </h1>
              <h1 className="text-lg font-light">
                {event.organizer_information.email}
              </h1>
              <h1 className="text-lg font-light">
                {event.organizer_information.phone}
              </h1>
            </div>
          </div>
          {/* Categories */}
          <div className="w-11/12 md:w-10/12  lg:w-9/12 flex  flex-col">
            <h1 className="text-lg font-semibold">Categories</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {event.categories_tags.map((value, index) => (
                <div key={index} className="p-2 bg-blue-200 rounded-lg">
                  {value}
                </div>
              ))}
            </div>
          </div>
          {/* Payment */}
          <div className="w-full flex  flex-col items-center">
            <h1 className="text-lg font-semibold">Payment</h1>
            <div className="flex-row flex gap-4 p-20 border border-blue-500 w-11/12 lg:w-10/12">
              <Tickets />
            </div>
          </div>
        </div>
      </div>
    </Homerapper>
  );
};

export default EventDetails;
