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
import { RiVipCrown2Fill } from "react-icons/ri";
import Homerapper from "@/components/Homewrapper";
import Lottie from "lottie-react";
import { Dialog, Transition } from "@headlessui/react";
import { IoMdTime } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { authToken } from "@/api/Auth";
import { userAuth } from "../../useContext";

export default function Home() {
  const { username, logout, isAuthenticated } = userAuth();

  const [day, setDay] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [hover, setHover] = useState(false);
  const cancelButtonRef = useRef(null);

  const handleDayChange = (event: SelectChangeEvent) => {
    setDay(event.target.value as string);
  };
  const handlEventChange = (event: SelectChangeEvent) => {
    setEventType(event.target.value as string);
  };
  const handlCategoryChange = (event: SelectChangeEvent) => {
    setEventCategory(event.target.value as string);
  };

  // //get user token from local storage
  // const getToken = async () => {
  //   try {
  //     const token = await localStorage.getItem("token");
  //     if (token) {
  //       authToken(token).then((value)=>{
  //         setUser(value?.data)
  //       })
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };

  useEffect(() => {
    console.log(isAuthenticated);
  }, []);
  return (
    <Homerapper>
      <div
        style={{
          backgroundImage: `url('/background/main.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="h-[100dvh] text-white md:h-[80vh]"
      >
        <div
          className={`w-full   h-[100dvh] md:h-[80vh] bg-blue-700 bg-opacity-50 flex lg:flex-row lg:p-12 pt-12  flex-col items-center justify-center gap-8 `}
        >
          <div className="w-8/12 lg:gap-4 gap-2 items-center lg:items-start flex flex-col ">
            {/* header */}
            <h1 className="lg:text-xl text-xl md:text-2xl font-serif text-center lg:text-start ">
              We offer event organizers and attendees a reliable user-friendly
              platform for seemless ticketing real time event updates, and
              marketing, tailored to multiple payment methods all in one place
            </h1>
            {/* body */}
            <h1 className="text-xs lg:text-base md:text-sm text-center lg:text-start"></h1>

            <div className="flex flex-row space-x-2">
              {/* button */}

              <Link
                href={"/User/Dashboard"}
                className="items-center justify-center flex bg-blue-500 w-40 h-12 border rounded "
              >
                <h1 className="">Create Event</h1>
              </Link>

              <Link
                href={"/User/Dashboard"}
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
                <BsFillCalendarEventFill color={"blue"} size={32} />
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
          <div className="grid grid-cols-2 md:grid-cols-3  gap-4 ">
            {/* days dropdown */}
            <div className="b">
              <FormControl
                variant="filled"
                sx={{ minWidth: 120, backgroundColor: "#F2F4FF" }}
              >
                <InputLabel id="demo-simple-select-filled-label">
                  day
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={day}
                  label="Age"
                  onChange={handleDayChange}
                >
                  <MenuItem value={10}>Musical</MenuItem>
                  <MenuItem value={20}>Tuesday</MenuItem>
                  <MenuItem value={30}>Wednesday</MenuItem>
                  <MenuItem value={30}>Thursday</MenuItem>
                  <MenuItem value={30}>Friday</MenuItem>
                  <MenuItem value={30}>Saturday</MenuItem>
                </Select>
              </FormControl>
            </div>
            {/* category dropdown */}

            <div className="flex justify-end md:justify-start">
              <FormControl
                variant="filled"
                sx={{ minWidth: 120, backgroundColor: "#F2F4FF" }}
              >
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={eventType}
                  label="Age"
                  onChange={handlEventChange}
                >
                  <MenuItem value={10}>Monday</MenuItem>
                  <MenuItem value={20}>Tuesday</MenuItem>
                  <MenuItem value={30}>Wednesday</MenuItem>
                  <MenuItem value={30}>Thursday</MenuItem>
                  <MenuItem value={30}>Friday</MenuItem>
                  <MenuItem value={30}>Saturday</MenuItem>
                </Select>
              </FormControl>
            </div>
            {/* event type dropdown */}
            <div className="">
              <FormControl
                variant="filled"
                sx={{ minWidth: 120, backgroundColor: "#F2F4FF" }}
              >
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={eventCategory}
                  label="Age"
                  onChange={handlCategoryChange}
                >
                  <MenuItem value={10}>Monday</MenuItem>
                  <MenuItem value={20}>Tuesday</MenuItem>
                  <MenuItem value={30}>Wednesday</MenuItem>
                  <MenuItem value={30}>Thursday</MenuItem>
                  <MenuItem value={30}>Friday</MenuItem>
                  <MenuItem value={30}>Saturday</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
      {/* events */}
      <div className="w-full flex justify-center p-4 ">
        {/* container */}
        <div className="w-11/12 lg:w-10/12   grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((value, index) => (
            <button
              style={{ borderRadius: 18.95, border: 2, borderWidth: 2 }}
              onClick={() => setOpen(true)}
              key={index}
            >
              {/* img */}
              <div
                className="w-full"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                {hover ? (
                  <video
                    width={100}
                    height={100}
                    style={{
                      width: "100%",
                      borderTopLeftRadius: 18.95,
                      borderTopRightRadius: 18.95,
                    }}
                    autoplay
                    muted
                  >
                    <source src={value.video} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    width={100}
                    height={100}
                    style={{
                      width: "100%",
                      borderTopLeftRadius: 18.95,
                      borderTopRightRadius: 18.95,
                    }}
                    src={value.image}
                    alt="pic"
                  />
                )}
              </div>
              {/* decription */}
              <div className="w-full p-4 flex space-x-2 border rounded-b-[18.95px]">
                {/* date */}
                <div className="text-center">
                  <p className="font-bold text-blue-500">{value.month}</p>
                  <h1>{value.day}</h1>
                </div>

                {/* decription */}
                <div className="space-y-2">
                  <p className="text-xs font-bold">{value.header}</p>
                  <p className="text-xs font-thin">{value.description}</p>
                </div>
              </div>
            </button>
          ))}

          {/* event creation modal */}
          <Transition.Root show={open} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              initialFocus={cancelButtonRef}
              onClose={setOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                      <div className="bg-white px-4 pb-12 pt-5 sm:p-6 sm:pb-8">
                        <div className="sm:flex sm:items-start">
                          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                            <IoTicket
                              className="h-6 w-6 text-green-600"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <Dialog.Title
                              as="h3"
                              className="text-base font-semibold leading-6 text-gray-900"
                            >
                              Purchase Ticket
                            </Dialog.Title>
                            <div className="mt-2">
                              <div className="flex flex-col lg:flex-row space-x-4 items-center space-y-4">
                                {/* event image */}
                                <Image
                                  src={"/images/event.jpg"}
                                  alt="pic"
                                  width={200}
                                  height={200}
                                />
                                {/* event timing & date*/}
                                <div className="">
                                  {/* timing */}
                                  <div className="flex items-center space-x-2">
                                    <IoMdTime
                                      size={24}
                                      className="text-gray-500"
                                    />
                                    <h1 className="text-xs text-gray-500">
                                      Fri, 30 July at 10:00 - Mon, 2 August 2024
                                      at 23:00
                                    </h1>
                                  </div>
                                  {/* timing */}
                                  <div className="flex items-center space-x-2">
                                    <MdLocationOn
                                      size={24}
                                      className="text-gray-500"
                                    />
                                    <h1 className="text-xs text-gray-500">
                                      The Door Church, Ferry Junction, Freetown,
                                      Sierra Leone
                                    </h1>
                                  </div>
                                </div>
                              </div>

                              {/* input Fields */}

                              <div className="w-full h-20 space-y-4">
                                <h1>Personal Info</h1>

                                {/* email and full name */}
                                <div className=" space-x-6">
                                  {/* full name */}
                                  <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="text-xs p-2 w-5/12 border"
                                  />
                                  {/* email */}
                                  <input
                                    type="email"
                                    placeholder="email"
                                    className="text-xs p-2 w-5/12 border"
                                  />
                                </div>

                                {/* address and phone number */}
                                <div className=" space-x-6">
                                  {/* phone number */}
                                  <input
                                    type="number"
                                    placeholder="Full Name"
                                    className="text-xs p-2 w-5/12 border"
                                  />
                                  {/* address */}
                                  <input
                                    type="text"
                                    placeholder="email"
                                    className="text-xs p-2 w-5/12 border"
                                  />
                                </div>
                                {/* next */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                          type="button"
                          className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                          onClick={() => setOpen(false)}
                        >
                          Proceed
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                          onClick={() => setOpen(false)}
                          ref={cancelButtonRef}
                        >
                          Cancel
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </div>
      </div>
      {/* more events view */}
      <div className="w-full justify-center flex p-4">
        <button className="w-40 h-14 rounded-xl border-blue-500 border text-blue-500">
          See More
        </button>
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
              <h1 className="font-bold xl:text-xl">Event Discovery</h1>
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
              <h1 className="font-bold xl:text-xl">VIP & Package Sales</h1>
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
    </Homerapper>
  );
}
