"use client";

import Userdashboardwrapper from "../../../components/Userdashboardwrapper";
import React, { useEffect, useState } from "react";
import QrReader from "react-qr-scanner";
import TableComponent from "@/components/TicketComponents/Table";
import ModalComponent from "@/components/TicketComponents/ModalComponent";
import { Column } from "react-table";
import {
  getAllEvent,
  getAllTickets,
  getInvitation,
  getTicket,
} from "@/api/Auth";
import { Scanner } from "@yudiel/react-qr-scanner";
import Table from "@/components/TicketComponents/Invitation";
import InvitationFormModal from "@/components/TicketComponents/InvitationFormModal";

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
  id: number;
  ticketNumber: string;
  expirationDate: string;
  ticketsSold: number;
  ticketsLeft: number;
  ticketsScanned: number;
  eventName: string;
}

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

const columns: Column<TicketData>[] = [
  { Header: "Ticket Number", accessor: "ticketNumber" },
  { Header: "Expiration Date", accessor: "expirationDate" },
  { Header: "Tickets Sold", accessor: "ticketsSold" },
  { Header: "Tickets Left", accessor: "ticketsLeft" },
  { Header: "Tickets Scanned", accessor: "ticketsScanned" },
  { Header: "Event Name", accessor: "eventName" },
];
const column: Column<invitation>[] = [
  { Header: "Ticket Number", accessor: "nameofattendee" },
  { Header: "Expiration Date", accessor: "expirationdate" },
  { Header: "Tickets Sold", accessor: "numberofinvitaion" },
  { Header: "Tickets Left", accessor: "uniqueIdentidier" },
  { Header: "Tickets Scanned", accessor: "email" },
  { Header: "Event Name", accessor: "unique_id" },
  { Header: "Event Name", accessor: "qrcode" },
  { Header: "Event Name", accessor: "event" },
];

function Page() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [event, setEvents] = useState<Event[]>([]);
  const [paidevent, setpaidEvents] = useState<Event[]>([]);
  const [ticket, setTicket] = useState<TicketData[]>([]);
  const [result, setResult] = useState<any | null>();
  const [action, setAction] = useState(false);
  const [scan, setScan] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<string>("");
  const [invitation, setInvitation] = useState<invitation[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  // const handleScan = (data: any) => {
  //   console.log(data);
  //   // if (data) {
  //   //   setResult(data);
  //   // }
  // };

  // const handleError = (err: any) => {
  //   console.error(err);
  // };

  // const previewStyle = {
  //   height: 240,
  //   width: 320,
  // };

  ////////////////////////////////////////////////////////////////////////
  //get all invitation
  const getInvitations = async (id: string) => {
    const response = await getInvitation(id);
    setInvitation(response);
    console.log(response);
  };

  useEffect(() => {
    ////////////////////////////////////////////////////////////////////////
    //get all events
    getAllEvent().then((events) => {
      console.log(events?.data);
      setEvents(events?.data);
      const data: Event[] = events?.data;
      if (events) {
        const freeItems = data.filter((item) => item.types === "free");
        const paidItems = data.filter((item) => item.types === "paid");
        setEvents(freeItems);
        setpaidEvents(paidItems);
      }
    });
    ////////////////////////////////////////////////////////////////////////
    //get all tickets
    getAllTickets().then((response) => {
      console.log(response?.data);
      setTicket(response?.data);
    });
  }, []);
  return (
    <Userdashboardwrapper>
      <div className="w-full space-x-4 text-lg p-4 flex border-b-2">
        <div>
          <button
            onClick={() => {
              setAction(false);
            }}
            className={`${!action && "underline underline-color"}`}
          >
            Ticket
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setAction(true);
            }}
            className={`${action && "underline underline-color"}`}
          >
            Invitation
          </button>
        </div>
      </div>

      {/* container */}

      {!action ? (
        <div className="p-4  space-y-2 w-full">
          <button
            className="p-2 rounded-lg text-white bg-blue-500 mr-2"
            onClick={() => setIsModalOpen(true)}
          >
            Create Ticket
          </button>
          <button
            className={`p-2 rounded-lg text-white ${
              scan
                ? "bg-red-500 hover:bg-red-700"
                : "bg-green-500 hover:bg-green-700"
            } `}
            onClick={() => setScan(!scan)}
          >
            {scan ? <h1>Close Scanner</h1> : <h1>Scan Ticket</h1>}
          </button>
          <TableComponent<TicketData> columns={columns} data={ticket} />
          <ModalComponent
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            events={paidevent}
          />
          <div className="w-40 h-40 border">
            {scan ? (
              <Scanner
                onResult={(text, result) => {
                  console.log(text);
                  getTicket(text).then((ticket) => {
                    if (ticket) {
                      setResult(ticket);
                      // console.log(ticket)
                    }
                    // console.log(ticket?.items)
                  });
                }}
                onError={(error) => console.log(error?.message)}
              />
            ) : null}
          </div>

          <div>
            <p>date Booked: {result && result.booked_on}</p>
            <p>Email: {result && result.email}</p>
            <p> Event: {result && result.event}</p>
            <p>Name: {result && result.name}</p>
            <p>Number of Tickets: {result && result.number_of_tickets}</p>
            <p>Phone Number: {result && result.phonenumber}</p>
            <p>id: {result && result.unique_id}</p>
          </div>
        </div>
      ) : (
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <select
              className={`mt-1 block w-60 py-2 px-3 border  bg-white rounded-md shadow-sm focus:outline-none sm:text-sm`}
              value={selectedEvent}
              onChange={(e) => {
                setSelectedEvent(e.target.value);
                getInvitations(e.target.value);
              }}
            >
              {event.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.title}
                </option>
              ))}
            </select>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => setModalIsOpen(true)}
            >
              Open Invitation Form
            </button>
          </div>
          <InvitationFormModal
            isOpen={modalIsOpen}
            events={selectedEvent}
            onRequestClose={() => setModalIsOpen(false)}
          />

          {invitation.length > 0 ? (
            <Table<invitation> columns={column} data={invitation} />
          ) : (
            <div>No Invitation created</div>
          )}
        </div>
      )}
    </Userdashboardwrapper>
  );
}

export default Page;
