import { createInvitation, createTicket, getAllEvents } from "@/api/Auth";
import React, { useState, useEffect } from "react";

interface ModalComponentProps {
  isOpen: boolean;
  onRequestClose: () => void;
  events: string;

}

const InvitationFormModal: React.FC<ModalComponentProps> = ({
  isOpen,
  onRequestClose,
  events,
}) => {
  const [expirationDate, setExpirationDate] = useState("");
  const [numberofinvitaion, setNumberOfInvitation] = useState("");
  const [nameofattendee, setnameofattendee] = useState("");
  const [uniqueIdentidier, setuniqueIdentidier] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    selectedEvent: "",
    expirationDate: "",
    numberofinvitaion: "",
    email: "",
    nameofattendee: "",
    uniqueIdentidier:""
  });

  const validateForm = () => {
    const newErrors = {
      selectedEvent: "",
      expirationDate: "",
      numberofinvitaion: "",
      email: "",
      nameofattendee: "",
      uniqueIdentidier:""
    };
    let isValid = true;

    if (!expirationDate || new Date(expirationDate) <= new Date()) {
      newErrors.expirationDate = "Please choose a future date.";
      isValid = false;
    }
    if (!numberofinvitaion || parseInt(numberofinvitaion, 10) <= 0) {
      newErrors.numberofinvitaion =
        "Please enter a positive number of tickets.";
      isValid = false;
    }
    if (!email ) {
      newErrors.email = "Please enter email.";
      isValid = false;
    }
    if (!nameofattendee )  {
      newErrors.nameofattendee = "Please enter the name of the attendee.";
      isValid = false;
    }
    if (!uniqueIdentidier )  {
      newErrors.uniqueIdentidier = "Please enter a unique identifier";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form is valid. Submitting...");
      console.log(expirationDate, numberofinvitaion, email, events,nameofattendee,uniqueIdentidier);
      const data = {
        nameofattendee:nameofattendee,
        expirationdate: expirationDate,
        numberofinvitaion:parseInt(numberofinvitaion) ,
        uniqueIdentidier:uniqueIdentidier,
        email: email,
        event:parseInt(events) ,
      };

      createInvitation(data).then((invitation) => {
        onRequestClose()
        window.location.reload();
      }).catch((error) => {})
      // Here, handle the form submission logic, e.g., updating state, sending data to an API, etc.
      //   onRequestClose(); // Close the modal if everything is valid
    } else {
      console.log("Form has errors.");
    }
  };

  useEffect(() => {
    console.log(events);

    if (!isOpen) {
      // Reset form and errors when modal is closed
      setExpirationDate("");
      setNumberOfInvitation("");
      setErrors({
        selectedEvent: "",
        expirationDate: "",
        numberofinvitaion: "",
        email: "",
        nameofattendee:"",
        uniqueIdentidier:""
      });
    }
  }, [isOpen, events]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      id="my-modal"
    >
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Ticket Details
          </h3>
          <form className="mt-2 px-7 py-3 space-y-4" onSubmit={handleSubmit}>
            {/* Expiration Date Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Expiration Date
              </label>
              <input
                type="date"
                className={`mt-1 block w-full py-2 px-3 border ${
                  errors.expirationDate ? "border-red-500" : "border-gray-300"
                } bg-white rounded-md shadow-sm focus:outline-none sm:text-sm`}
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
              />
              {errors.expirationDate && (
                <p className="text-red-500 text-xs italic">
                  {errors.expirationDate}
                </p>
              )}
            </div>

            {/* Number of Tickets Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Number of Tickets
              </label>
              <input
                type="number"
                className={`mt-1 block w-full py-2 px-3 border ${
                  errors.numberofinvitaion
                    ? "border-red-500"
                    : "border-gray-300"
                } bg-white rounded-md shadow-sm focus:outline-none sm:text-sm`}
                value={numberofinvitaion}
                onChange={(e) => setNumberOfInvitation(e.target.value)}
              />
              {errors.numberofinvitaion && (
                <p className="text-red-500 text-xs italic">
                  {errors.numberofinvitaion}
                </p>
              )}
            </div>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className={`mt-1 block w-full py-2 px-3 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } bg-white rounded-md shadow-sm focus:outline-none sm:text-sm`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">{errors.email}</p>
              )}
            </div>
            {/* nameofattendee */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name on Attendee
              </label>
              <input
                type="text"
                className={`mt-1 block w-full py-2 px-3 border ${
                  errors.nameofattendee ? "border-red-500" : "border-gray-300"
                } bg-white rounded-md shadow-sm focus:outline-none sm:text-sm`}
                value={nameofattendee}
                onChange={(e) => setnameofattendee(e.target.value)}
              />
              {errors.nameofattendee && (
                <p className="text-red-500 text-xs italic">{errors.nameofattendee}</p>
              )}
            </div>
            {/* uniqueIdentidier */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Unique Identifier
              </label>
              <input
                type="text"
                className={`mt-1 block w-full py-2 px-3 border ${
                  errors.uniqueIdentidier ? "border-red-500" : "border-gray-300"
                } bg-white rounded-md shadow-sm focus:outline-none sm:text-sm`}
                value={uniqueIdentidier}
                onChange={(e) => setuniqueIdentidier(e.target.value)}
              />
              {errors.uniqueIdentidier && (
                <p className="text-red-500 text-xs italic">{errors.uniqueIdentidier}</p>
              )}
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
        </div>
      </div>
    </div>
  );
};

export default InvitationFormModal;
