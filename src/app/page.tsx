"use client";
import { eventTypes, events } from "@/api/dummyData";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, Fragment, useEffect } from "react";
import { BsFillCalendarEventFill } from "react-icons/bs";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Animation from "../../public/Lottie/AnimationHome.json";
import {
  FaTicketAlt,
  FaCompass,
  FaMobileAlt,
  FaCoins,
  FaPrint,
} from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { IoShareSocialSharp, IoTicket } from "react-icons/io5";
import { IoIosAddCircle,IoIosCloseCircle } from "react-icons/io";
import { RiVipCrown2Fill } from "react-icons/ri";
import Homwrapper from "../components/Homwrapper";
import Lottie from "lottie-react";
import { MdPaid,MdOutlineCropFree } from "react-icons/md";
import { userAuth } from "../../useContext";
import EventItem from "@/components/HomeComponent/EventItem";
import EventCreation from "@/components/EventCreation";
import { useRouter } from "next/navigation";
import { getAllEvents } from "@/api/Auth";
import HomeProtection from "@/components/ProtectedRoute/HomeProtection";


type EventList={
  id:number;
  image:string;
  video:string;
  title:string;
  description:string;
}

export default function Home() {
  const { username, logout, isAuthenticated } = userAuth();
const navigation = useRouter()
  const [eventsList, setEventsList]=useState<EventList[]>([]);


  const DateFormatToArrayExample = (day:Date) => {
    const date = new Date(day);
    // Formatting the date using toLocaleDateString
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    // Splitting the formatted date into an array
    // The formatted date might look like "April 19, 2024"
    // Note: The exact format can vary depending on the browser and OS locale settings
    const dateParts = formattedDate.split(' '); // Attempting to split by space
    // Adjusting for potential differences in format (e.g., removing commas)
    dateParts[1] = dateParts[1].replace(',', ''); // Making sure the day part is clean
    
    return <div>{JSON.stringify(dateParts)}</div>; //
  };
  
  const getAllEvent=async()=>{
    try {
      
      await getAllEvents().then((events:any) => {
        console.log(events?.data)
        setEventsList(events?.data)
      })
    } catch (error) {
      
    }
  }

  useEffect(() => {
    console.log(isAuthenticated);
    getAllEvents().then((events) => {
      console.log(events)
    })
  }, []);
  return (
    <HomeProtection>
    <Homwrapper>
      <div
        style={{
          backgroundImage: `url('background/main.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className=" text-white h-[700px] xl:h-[900px]"
      >
        <div
          className={`w-full bg-blue-700 h-full  bg-opacity-50 flex md:flex-row    flex-col-reverse items-center justify-center gap-8 `}>
          <div className="w-8/12 lg:w-6/12 lg:gap-4 gap-2 items-center lg:items-start flex flex-col ">
            {/* header */}
            <h1 className="text-xl md:text-2xl font-serif text-center md:text-start ">
              We offer event organizers and attendees a reliable user-friendly
              platform for seemless ticketing real time event updates, and
              marketing, tailored to multiple payment methods all in one place
            </h1>
            {/* body */}

            <div className="flex flex-row space-x-2  w-full md:justify-start justify-center">
              {/* button */}

              <Link
                href={username?"/User/Dashboard": "/Auth/Signin"}
                className="items-center justify-center flex bg-blue-500 w-40 h-12 border rounded "
              >
                <h1 className="">Create Event</h1>
              </Link>

              <Link
                href={"/Pages/Search"}
                className="items-center justify-center flex bg-[#fb8500] w-40 h-12 border rounded "
              >
                <h1 className="">Buy Ticket</h1>
              </Link>
            </div>
          </div>
          <div className=" p-4 bg-blue-200 rounded-full bg-opacity-50 flex items-center justify-center">
            <Lottie
              animationData={Animation}
              loop={true}
              style={{ width: 200, height: 200 }}
            />
          </div>
        </div>
      </div>

      {/* event genre */}
      <div className="w-full p-4 items-center justify-center flex ">
        <div className="flex gap-6 lg:gap-10 overflow-scroll  hide-scrollbar">
          {eventTypes.map((event) => (
            <Link
              key={event.id}
              href={""}
              className="flex flex-col items-center"
            >
              {/* event icon */}
              <div className="w-20 h-20 lg:w-32 lg:h-32 border flex rounded-full items-center justify-center hover:border-blue-400">
                {
                  event.type==="paid"?

                  <MdPaid color={"blue"} size={32} />
                  :
                  <MdOutlineCropFree color={"blue"} size={32} />

                }
              </div>
              {/* event name */}
              <h1 className="text-xs text-gray-600 text-center">
                {event.name}
              </h1>
            </Link>
          ))}
        </div>
      </div>

      {/* upcoming events */}
      <div className="w-full flex justify-center p-4 mt-12 ">
        {/* header */}
        <div className="w-11/12 lg:w-10/12 flex-col md:flex-row justify-between p-2 flex gap-4">
          <div className="text-xl font-bold">Upcoming Events</div>

          {/* dropdown filters */}
         
        </div>
      </div>
      {/* events */}
      <div className="w-full flex justify-center p-4 ">
        {/* <Video src={"/vidoes/video1.mp4"} /> */}
        {/* container */}
        <div className="w-11/12 lg:w-10/12   grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {eventsList.map((value, index) => (
            <Link
              style={{ borderRadius: 18.95, border: 2, borderWidth: 2 }}
              href={`/Pages/${value.id}`}
            
              key={index}
            >
              {/* img */}
              <EventItem image={value.image} videoSrc={value.video} /> {/* Make sure the path is correct */}

              {/* decription */}
              <div className="w-full p-4 flex space-x-2 border rounded-b-[18.95px]">
                {/* date */}
                <div className="text-center">
                  {/* <p className="font-bold text-blue-500">{value.month}</p>
                  <h1>{value.day}</h1> */}
                </div>

                {/* decription */}
                <div className="space-y-2">
                  <p className="text-xs font-bold">{value.title}</p>
                  <p className="text-xs font-thin">{value.description}</p>
                </div>
              </div>
            </Link>
          ))}

    
        </div>
      </div>
      {/* more events view */}
      <div className="w-full justify-center flex p-4">
        <Link href={"/Pages/Search"} className="w-40 h-14 items-center justify-center flex rounded-xl border-blue-500 border text-blue-500">
          See More
        </Link>
      </div>

      <div className="w-full  flex justify-center text-center p-4">
        <div className=" w-11/12 text-xl">
          More than Just a Ticket An Experience!
        </div>
      </div>
      {/* adverts */}
      <div className="w-full  grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full  bg-red-500">
          {/* image */}
          <img
            src={"images/weddings.jpg"}
            alt="wedding pics"
            className="w-full"
          />
        </div>
        {/* services */}
        <div className="w-full space-y-4 xl:space-y-6 border p-4 justify-center items-center flex flex-col ">
          <div className="flex w-11/12 space-x-2 lg:space-x-4">
            <FaTicketAlt size={32} color="red" />
            {/* service details 1*/}
            <div>
              <h1 className="font-bold">Online Ticket Sales</h1>
              <h1 className="font-light text-sm xl:text-lg">
                Enabling customers to purchase tickets directly through the
                website.
              </h1>
            </div>
          </div>
          <div className="flex w-11/12 space-x-2 lg:space-x-4">
            <FaCompass size={32} color="green" />
            {/* service details 2*/}
            <div>
              <h1 className="font-bold ">Event Discovery</h1>
              <h1 className="font-light text-sm xl:text-lg">
                Helping users discover events based on their interests or
                location.
              </h1>
            </div>
          </div>
          <div className="flex w-11/12 space-x-2 lg:space-x-4">
            <FaMobileAlt size={32} color="blue" />
            {/* service details 3*/}
            <div>
              <h1 className="font-bold">Mobile Ticketing</h1>
              <h1 className="font-light text-sm xl:text-lg">
                Offering mobile-friendly ticketing options, such as e-tickets or
                mobile app access.{" "}
              </h1>
            </div>
          </div>
          <div className="flex w-11/12 space-x-2 lg:space-x-4">
            <FaCoins size={32} color="orange" />
            {/* service details 4*/}
            <div>
              <h1 className="font-bold">Event Promotion</h1>
              <h1 className="font-light text-sm xl:text-lg">
                Marketing tools and services to promote the event through the
                platform and partner networks.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  flex justify-center text-center p-4">
        <div className=" w-11/12 text-xl">he Stage is Set. Are You </div>
      </div>
      {/* adverts */}
      <div className="w-full  grid grid-cols-1 lg:grid-cols-2  pb-12">
        {/* services */}
        <div className="w-full space-y-4 xl:space-y-6 border p-4 justify-center items-center flex flex-col ">
          <div className="flex w-11/12 space-x-2 lg:space-x-4">
            <FaPrint size={32} color="red" />
            {/* service details 1*/}
            <div>
              <h1 className="font-bold">Print-at-Home Tickets</h1>
              <h1 className="font-light text-sm xl:text-lg">
                Enabling customers to print tickets from home.{" "}
              </h1>
            </div>
          </div>
          <div className="flex w-11/12 space-x-2 lg:space-x-4">
            <RiVipCrown2Fill size={32} color="green" />
            {/* service details 2*/}
            <div>
              <h1 className="font-bold ">VIP & Package Sales</h1>
              <h1 className="font-light text-sm xl:text-lg">
                Selling premium packages that may include VIP seating,
                meet-and-greets, or merchandise.
              </h1>
            </div>
          </div>
          <div className="flex w-11/12 space-x-2 lg:space-x-4">
            <IoShareSocialSharp size={32} color="blue" />
            {/* service details 3*/}
            <div>
              <h1 className="font-bold">Social Media Integration</h1>
              <h1 className="font-light text-sm xl:text-lg">
                Enabling sharing and promotion of events on social media
                platforms.
              </h1>
            </div>
          </div>
          <div className="flex w-11/12 space-x-2 lg:space-x-4">
            <MdSupportAgent size={32} color="orange" />
            {/* service details 4*/}
            <div>
              <h1 className="font-bold">Customer Support</h1>
              <h1 className="font-light text-sm xl:text-lg">
                Offering support services for both event organizers and
                attendees.
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full  bg-red-500">
          {/* image */}
          <img
            src={"images/culture.jpg"}
            alt="wedding pics"
            className="w-full"
          />
        </div>
      </div>

      <div className="w-full p-2  flex flex-col items-center">
        <h1>
          how It Works
        </h1>

        <div className=" w-10/12 flex justify-center  ">
         <video autoPlay controls>
         <source src="/vidoes/video2.mp4"/>
         </video>
        </div>
      </div>
    </Homwrapper>
</HomeProtection>
  );
}
