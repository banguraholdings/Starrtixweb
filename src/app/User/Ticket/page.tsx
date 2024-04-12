"use client";

import Userdashboardwrapper from "../../../components/Userdashboardwrapper";
import React, { useEffect, useState } from "react";
import QrReader from "react-qr-scanner";
import TableComponent from "@/components/TicketComponents/Table";
import ModalComponent from "@/components/TicketComponents/ModalComponent";
import { Column } from "react-table";
import { getAllEvent, getAllTickets, getTicket } from "@/api/Auth";
import { Scanner } from '@yudiel/react-qr-scanner';
import ISuperUser from "@/components/ProtectedRoute/ISuperUser";

type Event = {
  id: number;
  title: string;
  types: string;
  event: string;
  eventendtime: string;
  eventstarttime: string;
  eventtags: string;
  image: string;
  location: string;
  organizer: string;
  video: string;
  description: string;
};
interface TicketData {
  id:number;
  ticketNumber: string;
  expirationDate: string;
  ticketsSold: number;
  ticketsLeft: number;
  ticketsScanned: number;
  eventName: string;
}


type ticket = {
  booked_on:string;
  email:string;
  event:number;
  id:number;
  name:string;
  number_of_tickets:number;
  phonenumber:string;
  qrcode:string;
  unique_id:string;
}



const columns: Column<TicketData>[] = [
  { Header: "Ticket Number", accessor: "ticketNumber" },
  { Header: "Expiration Date", accessor: "expirationDate" },
  { Header: "Tickets Sold", accessor: "ticketsSold" },
  { Header: "Tickets Left", accessor: "ticketsLeft" },
  { Header: "Tickets Scanned", accessor: "ticketsScanned" },
  { Header: "Event Name", accessor: "eventName" },
];



function Page() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [event, setEvents] = useState<Event[]>([]);
  const [ticket, setTicket] = useState<TicketData[]>([])
  const [result, setResult] = useState<any|null>();
  const [scan, setScan]=useState<boolean>(false)
  const handleScan = (data: any) => {
    console.log(data)
    // if (data) {
    //   setResult(data);
    // }
  };

  const handleError = (err: any) => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  useEffect(() => {
    ////////////////////////////////////////////////////////////////////////
    //get all events
    getAllEvent().then((events) => {
      console.log(events?.data);
      setEvents(events?.data);
    });
    ////////////////////////////////////////////////////////////////////////
    //get all tickets
    getAllTickets().then((response) => {
      console.log(response?.data);
      setTicket(response?.data);

    });
  }, []);
  return (
    <ISuperUser>

    <Userdashboardwrapper>
      {/* container */}
      <div className="p-4  space-y-2 w-full">
        <button
          className="p-2 rounded-lg text-white bg-blue-500 mr-2"
          onClick={() => setIsModalOpen(true)}
        >
          Create Ticket
        </button>
        <button
          className={`p-2 rounded-lg text-white ${scan?"bg-red-500 hover:bg-red-700":"bg-green-500 hover:bg-green-700"} `}
          onClick={() => setScan(!scan)}
        >
          {
            scan?
            <h1>
              Close Scanner
            </h1>
            :
<h1>
Scan Ticket
</h1>
          }
        </button>
        <TableComponent<TicketData> columns={columns} data={ticket} />
        <ModalComponent
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          events={event}
        />
        <div className="w-40 h-40 border">

{
  scan?

  <Scanner
     onResult={(text, result) => {
       
       
       console.log( text)
     getTicket(text).then((ticket) => {
       if(ticket){

         setResult(ticket)
         // console.log(ticket)
       }
       // console.log(ticket?.items)
     })
     }}
     onError={(error) => console.log(error?.message)}
 />
 :null
}
        </div>
            
        
          <div>
             <p>date Booked: {result && result.booked_on}</p>
        <p>Email: { result &&result.email}</p>
        <p> Event: { result &&result.event}</p>
        <p>Name: { result &&result.name}</p>
        <p>Number of Tickets: { result &&result.number_of_tickets}</p>
        <p>Phone Number: { result &&result.phonenumber}</p>
        <p>id: { result &&result.unique_id}</p>
          </div>
        
     
       
      </div>
    </Userdashboardwrapper>
    </ISuperUser>
  );
}

export default Page;
