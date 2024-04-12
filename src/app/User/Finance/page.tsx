"use client";

import Userdashboardwrapper from "@/components/Userdashboardwrapper";
import React, { useEffect, useState } from "react";
import QrReader from "react-qr-scanner";
import TableComponent from "@/components/TicketComponents/Table";
import ModalComponent from "@/components/TicketComponents/ModalComponent";
import { Column } from "react-table";
import { getAllEvents, getAllTickets } from "@/api/Auth";

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

const columns: Column<TicketData>[] = [
  { Header: "Ticket Number", accessor: "ticketNumber" },
  { Header: "Expiration Date", accessor: "expirationDate" },
  { Header: "Tickets Sold", accessor: "ticketsSold" },
  { Header: "Tickets Left", accessor: "ticketsLeft" },
  { Header: "Tickets Scanned", accessor: "ticketsScanned" },
  { Header: "Event Name", accessor: "eventName" },
];

const data: TicketData[] = []; // Your data here

import ISuperUser from "@/components/ProtectedRoute/ISuperUser";

function Page() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [event, setEvents] = useState<Event[]>([]);
  const [ticket, setTicket] = useState<TicketData[]>([])
  // const [result, setResult] = useState("No result");
  // const handleScan = (data: any) => {
  //   if (data) {
  //     setResult(data);
  //   }
  // };

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
    getAllEvents().then((events) => {
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
          className="p-2 rounded-lg text-white bg-blue-500"
          onClick={() => setIsModalOpen(true)}
        >
          Create Ticket
        </button>
        <TableComponent<TicketData> columns={columns} data={ticket} />
        <ModalComponent
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          events={event}
        />
        {/* <QrReader
          delay={100}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
        />
        <p>{result}</p> */}
      </div>
    </Userdashboardwrapper>
    </ISuperUser>
  );
}

export default Page;
