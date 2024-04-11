import React from 'react';
import { saveAs } from 'file-saver'


// Define the interface if it's not already imported
interface ChildProps {
    isOpen: boolean;
    closeModal:(value: boolean) => void;
    qrcode:string;
  }
const Modal: React.FC<ChildProps> = ({ isOpen, closeModal, qrcode }) => {
  if (!isOpen) return null;

  const sendValueToParent = (): void => {
    closeModal(false);
  };
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative p-5 border w-96 shadow-lg rounded-md bg-white">
          <div className="mt-3 text-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Event Qrcode</h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-sm text-gray-500">
                
                <img src={qrcode}/></p>
            </div>
            <div className="items-center  px-4 py-3 ">
                <button
                onClick={()=>{
                 saveAs(qrcode, 'image.png')
                }}
                className='px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none mx-2'>
                    Download   
                </button>
              <button
                onClick={sendValueToParent}
                className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-green-700 focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
