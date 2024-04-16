"use client";

import Userdashboardwrapper from "@/components/Userdashboardwrapper";
import React, { useEffect, useState } from "react";
import { IoIosAddCircle,IoIosCloseCircle } from "react-icons/io";
import Calendar from "react-calendar";
import { activities } from "@/api/dummyData";
import ResponsiveLineChart from "@/components/ResponsiveLineChart";
import ResponsivePieChart from "@/components/ResponsivePieChart";
import ResponsiveEventTable from "@/components/ResponsiveEventTable";
import EventCreation from "@/components/EventCreation";
import { eventSteps } from "@/constants/Event";
import Step1 from "@/components/EventSteps/Step1";
import Step2 from "@/components/EventSteps/Step2";
import Step3 from "@/components/EventSteps/Step3";
import Step4 from "@/components/EventSteps/Step4";
import { userAuth } from "../../../../useContext";
import { FaCheckCircle } from "react-icons/fa";

import { eventMedia, getProfilePic, postEvent } from "@/api/Auth";
import { withProtected } from "@/components/ProtectedRoute/Authenticated";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
function Page() {
  //states
  const [value, onChange] = useState<Value>(new Date());
  const [currentIndex, setCurrentIndex] = useState(0);
  const { username } = userAuth();
  const [value1, setValue1]=useState<any>({})
  const [value2, setValue2]=useState<any>({})
  const [value3, setValue3]=useState<any>({})
  const [value4, setValue4]=useState<any>({})
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState<any>("")
  const [eventStatus, setEventStatus]=useState(false)
  const [profilepic, setProfilepic] = useState<string>("")

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);


  const getToken = async (): Promise<any> =>{
    const token =await localStorage.getItem("token")
    setToken(token)
  }

  useEffect(()=>{
    getToken()
      //get profile picture
      getProfilePic().then((value) => {
        console.log(value?.data[0].image)
        setProfilepic(value?.data[0].image)
      }).catch(error=>{

      })
  },[])
  //function that get values
  const values1 =(value:any)=>{
    console.log(value)
    setValue1(value)
  }
  const values2 =(value:any)=>{
    console.log(value)
    setValue2(value)
  }
  const values3 =(value:any)=>{
    console.log(value)
    setValue3(value)
  }
 
  const values4 =(value:any)=>{
    // console.log(value)
    // setValue4(value)
    const eventDetails={
      title:value1.eventTitle,
      location:value1.fullAddress,
      date:value1.startDate,
      event:value1.startTime,
      eventstarttime:value1.startTime,
      eventendtime:value1.endTime,
      types:value2.eventType,
      description:value3.description,
      eventtags:"hello",
      eventPic:value3.flyer,
      eventVideo:value3.video,
      token:token

    }
    const pics={
     eventPic:value3.flyer,
     eventVideo:value3.video,
     token:token
    }
    // //postevent
    postEvent(eventDetails).then((res)=>{
      console.log(res)
      setCurrentIndex(0)
      setValue1({})
      setValue2({})
      setValue3({})
      setValue4({})
      nextScreen(1)
      setEventStatus(true)
    }).catch((err)=>{})
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
  return (

      <Userdashboardwrapper>
        {/* container */}
        <div className=" bg-gray-100 border-b-2 w-full p-2 z-0">
          {/* header */}
          <div className="flex w-full  items-center pl-4 pr-4">
            <h1>Dashboard</h1>
            {/* user credentials */}
            <div className=" flex-1 w-full h-12 flex items-center justify-end space-x-2">
              {/* profile picture */}
              <div className="w-8 h-8 rounded-full bg-gray-400">
                <img src={profilepic} className="rounded-full"/>
              </div>
              {/* username */}
              <h1 className="text-sm">{username?.first_name} {username?.last_name}</h1>
            </div>
          </div>
        </div>
        {/* event numbers */}
        <div className="p-4 bg-gray-100 w-full xl:justify-center xl:flex">
          <ul className="flex justify-between w-full">
            {/* grid 1 */}
            <li className=" space-y-4  w-20 text-[8px] items-center justify-center flex flex-col h-20 md:w-40 md:h-40 xl:w-60 md:text-xs bg-white border rounded-lg shadow">
              <h1 className="text-gray-400">TOTAL SALES</h1>
              <h1 className="text-base md:text-2xl">Le120k</h1>
            </li>
            {/* grid 2 */}
            <li className="space-y-4 w-20 h-20 text-[8px] items-center justify-center flex flex-col md:w-40 md:h-40 xl:w-60 md:text-xs bg-white border rounded-lg shadow">
              <h1 className="text-gray-400">REGISTRRATION</h1>
              <h1 className="text-base md:text-2xl">3725</h1>
            </li>
            {/* grid 3 */}
            <li className="space-y-4 w-20 h-20 text-[8px] items-center justify-center flex flex-col md:w-40 md:h-40 xl:w-60 md:text-xs bg-white border rounded-lg shadow">
              <h1 className="text-center text-gray-400">TOTAL ATTENDANCES</h1>
              <h1 className="text-base md:text-2xl">4578</h1>
            </li>
            {/* grid 4 */}
            <li
              style={{
                backgroundImage: `url('../../background/ev.jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="w-20 h-20 md:w-40 md:h-40 xl:w-60 bg-white border rounded-lg shadow"
            >
              <button
                onClick={openModal}
                type="button"
                className="w-full h-full rounded-lg bg-blue-500 bg-opacity-50 flex items-center justify-center"
              >
                <IoIosAddCircle
                  color="white"
                  size={32}
                  className="hover:text-gray-300"
                />
              </button>
            </li>
          </ul>
        </div>
        {/* event creation modal */}
        {isOpen ? (
          <EventCreation>
            {
              eventStatus?
              <div className="w-full h-[400px] flex flex-col items-center justify-center">
                <FaCheckCircle color="green" size={40}/>
                Successfully Created an Event
                <button
                onClick={()=>{
                  closeModal();
                    setEventStatus(false)
                }}
                className="p-2 bg-blue-500"
                >
                  Close
                </button>
              </div>
              :
            <div>

              <div className="w-full flex justify-end p-2">
                <button        
                onClick={()=>{
                  closeModal();
                  setCurrentIndex(0)
                  setValue1({})
                  setValue2({})
                  setValue3({})
                  setValue4({})
                }}>
                  <IoIosCloseCircle size={24} color={"red"}/>
                </button>
              </div>
              <div className="flex flex-row  space-x-8 justify-center">
                {/* step preview */}
                {eventSteps.map((value) => (
                  <div   
                  className={`${currentIndex+1>value.id?"text-green-500":""}`}
                  key={value.id}>{value.step}</div>
                ))}
              </div>
              {/* Render the current screen */}
              {screens[currentIndex]}
              {/* button */}       
            </div>
            }
          </EventCreation>
        ) : null}
        {/* calendar and other event */}
        <div className="grid grid-cols-1 p-4 lg:grid-cols-2">
          {/* Recent Activity History */}
          <div className="p-2 ">
            {/* header */}
            <div className="flex -full">
              <h1>Recent Activity</h1>
              <div className="flex-1 justify-end flex text-blue-600">
                <button>See More`{">>"}`</button>
              </div>
            </div>
            {/* activities */}
            <div className="flex flex-col space-y-10 p-4">
              {activities.map((value, index) => (
                <button key={index} className="border p-4 hover:bg-gray-100">
                  <div className="flex space-x-2 b">
                    <img
                      src="../../Lottie/people.png"
                      alt="event icon"
                      className="w-6 h-6 rounded-full"
                    />
                    <div>
                      <h1 className="font-semibold text-start ">
                        {value.event}
                      </h1>
                    </div>
                    <h1>{value.activity}</h1>
                  </div>
                  <div className=" flex justify-center w-full">
                    <div className="w-10/12">
                      <h1 className="text-start text-blue-600">
                        {value.about}
                      </h1>
                    </div>
                  </div>
                  <div className=" flex justify-center w-full">
                    <div className="w-10/12">
                      <h1 className="text-start text-gray-600">{value.time}</h1>
                    </div>
                  </div>
                  <div className=" flex justify-center w-full">
                    <div className="w-10/12">
                      {value.img ? <img src={value.img} alt="images" /> : null}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          {/* Calendar and other utilities */}
          <div className="p-6 border-2 rounded-lg shadow bg-gray-100 space-y-12">
            {/* calendar */}
            <div className="w-full p-12 bg-white rounded-lg border">
              <Calendar onChange={onChange} value={value} />
            </div>
            {/* graph */}
            <div>
              <ResponsiveLineChart />
            </div>
            {/* pie chart */}
            <div>
              <ResponsivePieChart />
            </div>
          </div>
        </div>
        {/* event table */}
        <div className="w-full p-4">
          <ResponsiveEventTable />
        </div>
      </Userdashboardwrapper>
  );
}

export default Page ;
