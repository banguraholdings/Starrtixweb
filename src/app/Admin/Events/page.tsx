"use client";

import Dashboardwrapper from "@/components/Dashboardwrapper";
import React, { useEffect, useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FcGlobe } from "react-icons/fc";
import { IoIosAddCircle, IoIosCloseCircle } from "react-icons/io";
import Step1 from "@/components/EventSteps/Step1";
import Step2 from "@/components/EventSteps/Step2";
import Step3 from "@/components/EventSteps/Step3";
import Step4 from "@/components/EventSteps/Step4";
import Link from "next/link";
import Image from "next/image";
 import EventCreation from "@/components/EventCreation";
  import { eventSteps } from "@/constants/Event";
import { postEvent } from "@/api/Auth";

function Page() {
 
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [value1, setValue1] = useState<any>({})
  const [value2, setValue2] = useState<any>({})
  const [value3, setValue3] = useState<any>({})
  const [value4, setValue4] = useState<any>({})
  const [token, setToken] = useState<any>("")
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);



  
  const getToken = async (): Promise<any> => {
    const token = await localStorage.getItem("token")
    setToken(token)
  }

  useEffect(() => {
    getToken()
  }, [])
  //function that get values
  const values1 = (value: any) => {
    console.log(value)
    setValue1(value)
  }
  const values2 = (value: any) => {
    console.log(value)
    setValue2(value)
  }
  const values3 = (value: any) => {
    console.log(value)
    setValue3(value)
  }

  const values4 = (value: any) => {
    // console.log(value)
    // setValue4(value)
    const eventDetails = {
      title: value1.eventTitle,
      location: value1.fullAddress,
      date: value1.startDate,
      event: value1.startTime,
      eventstarttime: value1.startTime,
      eventendtime: value1.endTime,
      types: value2.eventType,
      description: value3.description,
      eventtags: "hello",
      eventPic: value3.flyer,
      eventVideo: value3.video,
      token: token

    }
    const pics = {
      eventPic: value3.flyer,
      eventVideo: value3.video,
      token: token
    }
    // //postevent
    postEvent(eventDetails).then((res) => {
      console.log(res)
    })
    // console.log(eventDetails)
    // console.log(value1, value2, value3, value4)

    // //post event pic
    // eventMedia(pics).then((res)=>{
    //   console.log(res)
    // })
    // console.log(value3.flyer.name,value3.video)
  }
  // Function to navigate to the next screen
  const nextScreen = (value: number) => {
    if (currentIndex < screens.length - 1) {
      setCurrentIndex(currentIndex + value);
    }
  };

  // Function to navigate to the previous screen
  const prevScreen = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  //screens
  const screens = [
    <Step1 key={currentIndex} closeStep={nextScreen} Finalvalues={values1} />,
    <Step2 key={currentIndex} closeStep={nextScreen} Finalvalues={values2} />,
    <Step3 key={currentIndex} closeStep={nextScreen} Finalvalues={values3} />,
    <Step4 key={currentIndex} closeStep={nextScreen} Finalvalues={values4} />,
  ];
  //events array
  const events = [
    {
      month: "AUG",
      day: "14",
      header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      description:
        "We’ll get you directly seated and inside for you to enjoy the show.",
      image: "../../images/event.jpg",
    },
    {
      month: "AUG",
      day: "14",
      header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      description:
        "We’ll get you directly seated and inside for you to enjoy the show.",
      image: "../../images/event1.jpg",
    },
    {
      month: "AUG",
      day: "14",
      header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      description:
        "We’ll get you directly seated and inside for you to enjoy the show.",
      image: "../../images/event2.jpg",
    },
    {
      month: "AUG",
      day: "14",
      header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      description:
        "We’ll get you directly seated and inside for you to enjoy the show.",
      image: "../../images/event3.jpg",
    },
    {
      month: "AUG",
      day: "14",
      header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      description:
        "We’ll get you directly seated and inside for you to enjoy the show.",
      image: "../../images/event4.jpg",
    },
    {
      month: "AUG",
      day: "14",
      header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      description:
        "We’ll get you directly seated and inside for you to enjoy the show.",
      image: "../../images/event.jpg",
    },
  ];
  //states that control the events
  const [isSearch, setIsSearch] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [selectedDateValue, setSelectedDateValue] = useState("");
  const [isActive, setIsActive] = useState(false);
  // Handler for when the dropdown value changes
  const handleSelectedDateChange = (event: any) => {
    setSelectedDateValue(event.target.value);
  };
  return (
    <Dashboardwrapper>
      <div className="w-full flex  justify-center">
        {/* header */}
        <div className="w-11/12   p-4 flex items-center">
          <h1 className="underline text-xl font-bold">All Events</h1>

          <div className=" flex-1 w-full flex justify-end space-x-2">
            {/* Search */}
            {!isSearch ? (
              <button
                onClick={() => setIsSearch(true)}
                className="md:p-4 p-2 bg-blue-500 text-white"
              >
                Search
              </button>
            ) : null}
            {/* filter */}
            {!isFilter ? (
              <button
                onClick={() => setIsFilter(true)}
                className="md:p-4 p-2 border bg-blue-100"
              >
                <IoFilterSharp size={24} className="text-gray-600" />
              </button>
            ) : null}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        {/* Search and filter */}
        <div className="w-11/12 p-2 space-y-2">
          {/* Search */}

          {isSearch ? (
            <div className="w-full space-x-2">
              <button onClick={() => setIsSearch(false)}>
                <MdCancel size={24} color="gray" />
              </button>
              <div className="bg-red-500 flex ">
                <input type="text" className="flex-1 p-2 border" />
                <div className="flex items-center justify-center bg-blue-500 p-2 md:p-4">
                  <FaSearch color="white" />
                </div>
              </div>
            </div>
          ) : null}
          {/* filter */}

          {isFilter ? (
            <div className="w-full space-x-2">
              <button onClick={() => setIsFilter(false)}>
                <MdCancel size={24} color="gray" />
              </button>
              <div className=" w-full flex   ">
                {/* filter by date */}
                <select
                  value={selectedDateValue}
                  onChange={handleSelectedDateChange}
                  className="bg-blue-200 p-2 rounded border-[0.2px]"
                >
                  <option value="">Select date</option>
                  <option value="days">days</option>
                  <option value="weeks">weeks</option>
                  <option value="month">month</option>
                  <option value="year">year</option>
                </select>
                {/* filter by Event type */}
                <select
                  value={selectedDateValue}
                  onChange={handleSelectedDateChange}
                  className="bg-blue-200 p-2 rounded border-[0.2px]"
                >
                  <option value="">Select Event</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Social">Social</option>
                  <option value="Charity">Charity</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Education">Education</option>
                </select>
              </div>
            </div>
          ) : null}
        </div>

        {/* filter by past and present */}
        <div className="w-11/12 border-b-2 flex">
          <div
            className={`p-2 flex  ${
              !isActive ? "border-blue-500 border-b-4" : null
            }  space-x-1`}
          >
            <p className="bg-blue-500 w-10 h-10 items-center justify-center flex rounded-full text-white">{"10"}</p>
            <button onClick={() => setIsActive(false)}>Active Event</button>
          </div>
          <div
            className={`p-2 flex  ${
              isActive ? "border-blue-500 border-b-4" : null
            }  space-x-1`}
          >
            <p className="bg-blue-500 w-10 h-10 items-center justify-center flex p-2 rounded-full text-white">{"2"}</p>
            <button onClick={() => setIsActive(true)}>Ended Event</button>
          </div>
        </div>

        {/* event data viewing and adding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full place-items-center p-2 gap-4">
          {/* adding event */}
          <div
            style={{
              backgroundImage: `url('../../background/ev.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-11/12 h-40 md:h-full bg-gray-100 border-[0.2px] shadow-md flex flex-col items-center justify-center rounded-xl"
          >
            <button onClick={openModal} className="w-full flex items-center justify-center h-full bg-opacity-50 bg-blue-500 text-white rounded-xl">
              <IoIosAddCircle
                color="white"
                size={40}
                className="hover:text-gray-300"
              />{" "}
            </button>
          </div>
          {/* event data */}
          {events.map((value, index) => (
            <Link
              style={{ borderRadius: 18.95, border: 2, borderWidth: 2 }}
              href={"#"}
              key={index}
              passHref
            >
              {/* img */}
              <div className="w-full">
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
            </Link>
          ))}
        </div>
      </div>

      {/* event creation modal */}
      {isOpen ? (
        <EventCreation>
          <div className="w-full flex justify-end p-2">
            <button

              onClick={() => {
                closeModal();
                setCurrentIndex(0)
                setValue1({})
                setValue2({})
                setValue3({})
                setValue4({})
              }}>
              <IoIosCloseCircle size={24} color={"red"} />
            </button>
          </div>
          <div className="flex flex-row  space-x-8 justify-center">
            {/* step preview */}
            {eventSteps.map((value) => (
              <div

                className={`${currentIndex > value.id ? "text-green-500" : ""}`}
                key={value.id}>{value.step}</div>
            ))}
          </div>

          {/* Render the current screen */}
          {screens[currentIndex]}
          {/* button */}


        </EventCreation>
      ) : null}
    </Dashboardwrapper>
  );
}

export default Page;
