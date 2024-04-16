"use client";

import Userdashboardwrapper from "@/components/Userdashboardwrapper";
import React, { useEffect, useState } from "react";
import { WhatsappShareButton, WhatsappIcon, TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon } from 'react-share';

import {
  FaRegCalendarAlt,
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { IoLocation } from "react-icons/io5";
import { getAllEvent, getAllEvents } from "@/api/Auth";
import  QRCode  from 'qrcode.react';

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



const baseUrl= process.env.NEXT_PUBLIC_BASE_URL
function Page() {
  const [event, setEvent]=useState<Event>()
  const [events, setEvents]=useState<Event[]>([])
  const [eventId, setEventId]=useState<string>("")
  const downloadQR = () => {
    // Use type assertion to cast the element to HTMLCanvasElement
    const canvas = document.getElementById('qrCodeEl') as HTMLCanvasElement;
  
    if (canvas) {
      const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "QRCode.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } else {
      console.error('Unable to find element with ID qrCodeEl');
    }
  };
  const handlePictureUpload = (event: any) => {

    


    const file = event.target.files[0];
    console.log("Picture uploaded:", file);
    // Process the picture file as needed
  };

  const handleVideoUpload = (event: any) => {
    const file = event.target.files[0];
    console.log("Video uploaded:", file);
    // Process the video file as needed
  };

  const getEvents = async(id:string)=>{
    try {
      await getAllEvents(id).then((events)=>{
        console.log(events?.data);
        setEvent(events?.data);
      })
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    getAllEvent().then((value)=>{
      setEvents(value?.data)
    }).catch((error)=>{})

  },[event])

  const shareUrl= "www.facbook.com"
  const title = "this is promo time"
  return (
    <Userdashboardwrapper>
      {/* drop down to select event */}
      <div className="w-full p-2 ">
        <select
          name=""
          id=""
          className="w-60 p-2 border-[0.2px] rounded border-blue-500"
          onChange={(e)=>{
            // setEventId(e.target.value)
            // console.log(e.target.value)
            getEvents(e.target.value)

          }}
        >
          {
            events.map((value, index)=>(
              <option
              key={index}
              value={value.id}>{value.title}</option>

            ))
          }
        </select>
      </div>

{
  event && (
    
      <div className="flex flex-col lg:flex-row">
        {/* event details */}
        <div className="w-full p-2 space-y-4">
          <h1 className="text-xl">Event Details</h1>
          <img
            src={event?.image}
            alt="event-image"
            className="rounded-lg"
          />

          {/* event Name */}
          <div className="">
            <h1 className="text-lg font-medium">
              {event?.title}
            </h1>
          </div>

          {/* ABOUT EVENT */}
          <div>
            <h1 className="text-sm">
             {event?.description}
            </h1>
          </div>
          {/* button for uploading pic and video  */}
          {/* <div className="flex space-x-4">
            <label
              htmlFor="picture-upload"
              className="bg-orange-500 p-2 text-white rounded-xl"
            >
              Upload Picture
              <input
                type="file"
                id="picture-upload"
                accept="image/*"
                onChange={handlePictureUpload}
                style={{ display: "none" }}
              />
            </label>

            <label
              htmlFor="video-upload"
              className="p-2 text-white rounded-xl bg-green-500"
            >
              Upload Video
              <input
                type="file"
                id="video-upload"
                accept="video/*"
                onChange={handleVideoUpload}
                style={{ display: "none" }}
              />
            </label>
          </div> */}

          {/* details */}

          <div className="">
            <div className="p-2 flex  flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 ">
              {/* ticket price */}

              <div className="bg-gray-200 rounded p-2">
                <h1 className="text-gray-500">Ticket Price</h1>
                <h1>{event?.types}</h1>
              </div>
              {/*  date*/}

              <div className="bg-gray-200 rounded p-2">
                <h1 className="text-gray-500">Date</h1>
                <div className="flex items-center">
                  <h1>
                    {" "}
                    <FaRegCalendarAlt />
                  </h1>
                  <h1> {event?.eventstarttime}</h1>
                </div>
              </div>
              {/*  date*/}

              <div className="bg-gray-200 rounded p-2">
                <h1 className="text-gray-500">location</h1>
                <div className="flex items-center ">
                  <h1>
                    {" "}
                    <IoLocation />
                  </h1>
                  <h1> {event?.location} </h1>
                  <h1 className="pl-4">
                    {" "}
                    <FaArrowRight />
                  </h1>
                </div>
              </div>
            </div>
            {/* Qrcode */}
      <div className="flex flex-col items-center">
            <QRCode
        id="qrCodeEl"
        value={`http://starrtix.com/Pages/Eventdetails/?id=${event.id}`}
        size={290}
        level={"H"}
        includeMargin={true}
      />

      <button
      onClick={downloadQR}
            className="w-32 p-4 bg-blue-500 rounded"
      >
        Download
      </button>
     
      </div>
          </div>
        </div>

        {/* social media to share and market event */}
        <div className="w-full lg:w-5/12 p-2">
          {/* phone screen */}
          <h1>
            Share Event
          </h1>
          <div className="lg:hidden flex  justify-between p-12 bg-gray-200 border-[0.2px] rounded-lg shadow-lg">
          <FacebookShareButton url={`${baseUrl}/Pages/Eventdetails/?id=${event.id}`}  hashtag="#example">
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={`${baseUrl}/Pages/Eventdetails/?id=${event.id}`} title={title} via="exampleUser" hashtags={["example", "react"]}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <WhatsappShareButton url={`${baseUrl}/Pages/Eventdetails/?id=${event.id}`} title={title} separator=":: ">
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
          </div>

        {/* computer screen */}
        <div className="w-full h-full hidden bg-gray-200 lg:flex flex-col items-center justify-center p-4 space-y-4 rounded-lg">
          <h1>
            Share Event
          </h1>
          <FacebookShareButton url={`${baseUrl}/Pages/Eventdetails/?id=${event.id}`}  hashtag="#example">
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={`${baseUrl}/Pages/Eventdetails/?id=${event.id}`} title={title} via="exampleUser" hashtags={["example", "react"]}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <WhatsappShareButton url={`${baseUrl}/Pages/Eventdetails/?id=${event.id}`} title={title} separator=":: ">
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        </div>
        
        </div>
      </div>
  )

}
    </Userdashboardwrapper>
  );
}

export default Page;
