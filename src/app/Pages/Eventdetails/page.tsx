"use client";

// pages/events/[id].js
import { useRouter } from "next/router";
import Homwrapper from "../../../components/Homwrapper";
import Tickets from "../../../components/TicketBuying/Tickets";
import { IoCalendar } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { getAllEvents } from "@/api/Auth";
import { useEffect, useState } from "react";
import Modal from "@/components/TicketComponents/Modal";



type ticket={
  id:number;
  ticketnumber:number;
}

type organizer={
username:string;
email:string;
phonenumber:string;
}

type Event={
  id:number;
  title:string;
  types:string;
  event:string;
  date:string;
  eventendtime:string;
  eventstarttime:string;
  eventtags:string;
  image:string;
  location:string;
  organizer:organizer;
  tickets:ticket[];
  video:string;
  description:string;
}


const EventDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qrcode, setQrcode]=useState<string>("");
  const closeModal = () => setIsModalOpen(false);
  const data=(value:any)=>{
    console.log(value)
    if(value){
      setQrcode(value)
      setIsModalOpen(true)
    }
  }
  // const router = useRouter();

  // Placeholder data - you might want to fetch this data from an API or your server

  const [events, setEvent]=useState<Event>()
  const getEvents = async()=>{
    try {
      await getAllEvents().then((events)=>{
        console.log(events?.data);
        setEvent(events?.data[2]);
      })
    } catch (error) {
      
    }
  }
 


  useEffect(()=>{
    getEvents()
  },[])
  return (
    <Homwrapper>
      <div className="flex-1  flex flex-col  w-full items-center pt-20  ">
      <Modal isOpen={isModalOpen} closeModal={closeModal} qrcode={qrcode} />

        <div className="w-11/12 space-x-2 flex-col md:flex-row border rounded-lg flex justify-center lg:p-12 lg:pt-24 pt-24 items-center space-y-4">
          {/* image */}
          <img src={events?.image}
          alt="pic"
          className="w-11/12 md:w-8/12 lg:w-6/12 rounded-xl border" />
          <img src={events?.video}
          alt="pic"
          className="w-11/12 md:w-8/12 lg:w-6/12 rounded-xl" />
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
              <FaLocationDot />
                   {" "} {events?.location}
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
              <h1 className="text-lg font-light">
              {events?.organizer.email}
              </h1>
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
        
        {
          events && events.tickets && typeof events.tickets === 'object' && Object.keys(events.tickets).length===0?
          <div className=" w-full justify-center flex">
            No Ticket Currenty available for This event
          </div>
          :
          <Tickets event={events?.id}  val={data}/>

        }
            </div>
          </div>
        </div>
      </div>
    </Homwrapper>
  );
};

export default EventDetails;
