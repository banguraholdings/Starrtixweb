"use client";

// pages/events/[id].js
import { useRouter } from "next/router";
import Homwrapper from "../../../components/Homwrapper";
import Tickets from "../../../components/TicketBuying/Tickets";
import { IoCalendar } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { getAllEvents, getInvitationByUuid } from "@/api/Auth";
import { useEffect, useState } from "react";
import Modal from "@/components/TicketComponents/Modal";
import { Hourglass } from "react-loader-spinner";

type ticket = {
  id: number;
  ticketnumber: number;
};

type organizer = {
  username: string;
  email: string;
  phonenumber: string;
};

type invitation = {
  nameofattendee: string;
  expirationdate: string;
  numberofinvitaion: number;
  uniqueIdentidier: string;
  email: string;
  unique_id: string;
  qrcode: string;
  event: number;
};
type Event = {
  id: number;
  title: string;
  types: string;
  event: string;
  date: string;
  eventendtime: string;
  eventstarttime: string;
  eventtags: string;
  image: string;
  location: string;
  organizer: organizer;
  tickets: ticket[];
  invites: invitation[];
  video: string;
  description: string;
};

type searchParams = {
  searchParams: {
    id: string;
  };
};

const EventDetails = ({ searchParams }: searchParams) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qrcode, setQrcode] = useState<string>("");
  const closeModal = () => setIsModalOpen(false);
  const [code, setCode] = useState<string>("");
  const data = (value: any) => {
    console.log(value);
    if (value) {
      setQrcode(value);
      setIsModalOpen(true);
    }
  };
  // const router = useRouter();

  // Placeholder data - you might want to fetch this data from an API or your server

  const [events, setEvent] = useState<Event>();
  const getEvents = async (id: string) => {
    try {
      await getAllEvents(id).then((events) => {
        console.log(events?.data);
        setEvent(events?.data);
      });
    } catch (error) {}
  };

  useEffect(() => {
    console.log(searchParams.id);
    getEvents(searchParams.id);
  }, []);

  if (!events) {
    return (
      <div className="w-full flex justify-center">
        <Hourglass
          height="60"
          width="60"
          colors={["white", "#72a1ed"]}
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  return (
    <Homwrapper>
      <div className="flex-1  flex flex-col  w-full items-center  ">
        <div
          style={{
            backgroundImage: `url('${events?.image}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="text-white h-[400px] w-full"
        >
          <div className="w-full bg-blue-700 lg:p-12 lg:pt-24 pt-24 pb-12 space-y-4 h-[400px] bg-opacity-30 flex flex-col items-center justify-center"></div>
        </div>
        <Modal isOpen={isModalOpen} closeModal={closeModal} qrcode={qrcode} />

        <div className="w-11/12 space-x-2 flex-col md:flex-row border rounded-lg flex justify-center lg:p-12 lg:pt-24 pt-24 items-center space-y-4">
          {/* image */}
          <img
            src={events?.image}
            alt="pic"
            className="w-11/12 md:w-8/12 lg:w-6/12 rounded-xl border"
          />
          <img
            src={events?.video}
            alt="pic"
            className="w-11/12 md:w-8/12 lg:w-6/12 rounded-xl"
          />
        </div>

        {/* event details */}
        <div className="w-full flex p-4 flex-col space-y-6  items-center">
          <div className="w-11/12 md:w-10/12  lg:w-9/12 flex  ">
            <h1 className="text-4xl font-semibold">{events?.title}</h1>
          </div>

          {/* time and date */}
          <div className="w-11/12 md:w-10/12  lg:w-9/12 flex  flex-col">
            <h1 className="text-lg font-semibold">Date and time</h1>
            <h1 className="text-lg font-light flex items-center space-x-4">
              <span>
                <IoCalendar />
              </span>
              {events?.date}
            </h1>
            <h1 className="text-lg font-light flex items-center space-x-4">
              <span>
                <FaClock />
              </span>

              {events?.eventstarttime}
            </h1>
          </div>
          {/* Location */}
          <div className="w-11/12 md:w-10/12  lg:w-9/12 flex  flex-col">
            <h1 className="text-lg font-semibold">Location</h1>
            <h1 className="text-lg font-light flex items-center space-x-4">
              <FaLocationDot /> {events?.location}
            </h1>
          </div>
          {/* Descritpion */}
          <div className="w-11/12 md:w-10/12  lg:w-9/12 flex  flex-col">
            <h1 className="text-lg font-semibold">About Event</h1>
            <h1 className="text-lg font-light">{events?.description}</h1>
          </div>
          {/* Organizers Info */}
          <div className="w-11/12 md:w-10/12  lg:w-9/12 flex  flex-col">
            <h1 className="text-lg font-semibold">Organizers Info</h1>
            <div>
              <h1 className="text-lg font-light">
                {events?.organizer.username}
              </h1>
              <h1 className="text-lg font-light">{events?.organizer.email}</h1>
              <h1 className="text-lg font-light">
                {events?.organizer.phonenumber}
              </h1>
            </div>
          </div>
          {/* Categories */}
          <div className="w-11/12 md:w-10/12  lg:w-9/12 flex  flex-col">
            <h1 className="text-lg font-semibold">Categories</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* {event.categories_tags.map((value, index) => (
                <div key={index} className="p-2 bg-blue-200 rounded-lg">
                  {value}
                </div>
              ))} */}
            </div>
          </div>
          {/* Payment */}
          <div className="w-full flex  flex-col items-center">
            <h1 className="text-lg font-semibold">Booking</h1>
            <div className="flex-row flex gap-4 p-20 border border-blue-500 w-11/12 lg:w-10/12">
              {events &&
              events.tickets &&
              typeof events.tickets === "object" &&
              Object.keys(events.tickets).length === 0 &&
              Object.keys(events.invites).length === 0 ? (
                <div className=" w-full justify-center flex">
                  No Ticket Currenty available for This event
                </div>
              ) : events?.types === "free" ? (
                <div className="w-full flex flex-col items-center space-y-2">
                  <label htmlFor="generate">Generate QRCode</label>
                  <input
                    type="text"
                    id="generate"
                    className="w-full md:w-6/12 lg:w-4/12 rounded"
                    onChange={(value) => {
                      console.log(value.target.value);
                      setCode(value.target.value);
                    }}
                  />

                  <button
                    onClick={() => {
                      getInvitationByUuid(code).then((invitation) => {
                        console.log(invitation.data.qrcode);
                        data(invitation.data.qrcode)
                      }).catch((error) => {});
                    }}
                    className="p-3 bg-blue-500 w-6/12 md:w-4/12 lg:w-2/12 rounded text-white"
                  >
                    Generate
                  </button>
                </div>
              ) : (
                <Tickets event={events?.id} val={data} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Homwrapper>
  );
};

export default EventDetails;
