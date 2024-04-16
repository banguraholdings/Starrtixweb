import { createTicket, getAllEvents } from '@/api/Auth';
import React, { useState, useEffect } from 'react';





type Event={
    id:number;
    title:string;
    types:string;
    event:string;
    eventendtime:string;
    eventstarttime:string;
    eventtags:string;
    image:string;
    location:string;
    organizer:string;
    video:string;
    description:string;
  }

interface ModalComponentProps {
  isOpen: boolean;
  onRequestClose: () => void;
  events: Event[];
}

const ModalComponent: React.FC<ModalComponentProps> = ({ isOpen, onRequestClose, events }) => {
  const [selectedEvent, setSelectedEvent] = useState(events[0]?.id || 0);
  const [expirationDate, setExpirationDate] = useState('');
  const [numberOfTickets, setNumberOfTickets] = useState('');
  const [errors, setErrors] = useState({
    selectedEvent: '',
    expirationDate: '',
    numberOfTickets: '',
  });

  const validateForm = () => {
    const newErrors = { selectedEvent: '', expirationDate: '', numberOfTickets: '' };
    let isValid = true;

    if (!selectedEvent) {
      newErrors.selectedEvent = 'Please select an event.';
      isValid = false;
    }
    if (!expirationDate || new Date(expirationDate) <= new Date()) {
      newErrors.expirationDate = 'Please choose a future date.';
      isValid = false;
    }
    if (!numberOfTickets || parseInt(numberOfTickets, 10) <= 0) {
      newErrors.numberOfTickets = 'Please enter a positive number of tickets.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form is valid. Submitting...");
      console.log(selectedEvent,expirationDate,numberOfTickets)
      const data={
        ticketnumber: numberOfTickets,
        expirationdate: expirationDate,
        event:selectedEvent
      }
      createTicket(data).then(ticket => {
        console.log(ticket?.data)
        alert("Ticket Successfully created")
        onRequestClose()
      }).catch(error => {})
      // Here, handle the form submission logic, e.g., updating state, sending data to an API, etc.
    //   onRequestClose(); // Close the modal if everything is valid
    } else {
      console.log("Form has errors.");
    }
  };


 
  useEffect(() => {
    if (!isOpen) {
      // Reset form and errors when modal is closed
      setSelectedEvent(events[0]?.id || 0);
      setExpirationDate('');
      setNumberOfTickets('');
      setErrors({ selectedEvent: '', expirationDate: '', numberOfTickets: '' });
    }
    
  }, [isOpen, events]);

  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Ticket Details</h3>
          {
            events.length>=1 ?
          <form className="mt-2 px-7 py-3 space-y-4" onSubmit={handleSubmit}>
            {/* Event Select */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Event</label>
              <select
                className={`mt-1 block w-full py-2 px-3 border ${errors.selectedEvent ? 'border-red-500' : 'border-gray-300'} bg-white rounded-md shadow-sm focus:outline-none sm:text-sm`}
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(parseInt(e.target.value))}
              >
                { events.map((event) => (
                  <option key={event.id} value={event.id}>{event.title}</option>
                ))}
              </select>
              {errors.selectedEvent && <p className="text-red-500 text-xs italic">{errors.selectedEvent}</p>}
            </div>
            
            {/* Expiration Date Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Expiration Date</label>
              <input
                type="date"
                className={`mt-1 block w-full py-2 px-3 border ${errors.expirationDate ? 'border-red-500' : 'border-gray-300'} bg-white rounded-md shadow-sm focus:outline-none sm:text-sm`}
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
              />
              {errors.expirationDate && <p className="text-red-500 text-xs italic">{errors.expirationDate}</p>}
            </div>
            
            {/* Number of Tickets Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Number of Tickets</label>
              <input
                type="number"
                className={`mt-1 block w-full py-2 px-3 border ${errors.numberOfTickets ? 'border-red-500' : 'border-gray-300'} bg-white rounded-md shadow-sm focus:outline-none sm:text-sm`}
                value={numberOfTickets}
                onChange={(e) => setNumberOfTickets(e.target.value)}
              />
              {errors.numberOfTickets && <p className="text-red-500 text-xs italic">{errors.numberOfTickets}</p>}
            </div>

            {/* Form Actions */}
            <div className="flex items-center justify-end p-6 border-t border-solid border-gray-200 rounded-b">
              <button
                type="button"
                className="text-red-500 background-transparent uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={onRequestClose}
              >
                Close
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Save Changes
              </button>
            </div>
          </form>
          :
          <div className='w-full h-full flex flex-col items-center justify-center'>
            <h1>

              No Paid Event
            </h1>
              <button
                type="button"
                className="text-red-500 background-transparent uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={onRequestClose}
              >
                Close
              </button>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
