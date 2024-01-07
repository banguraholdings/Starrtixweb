import Homerapper from "@/components/Homewrapper";
import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function page() {
  return (
    <Homerapper>
      <div className="w-full lg:h-[90dvh] h-full flex flex-col lg:flex-row items-center">
        {/* Contact me words */}
        <div className="h-[90dvh]   flex flex-col items-center justify-center w-full space-y-4">
          <div className="flex flex-col items-center lg:items-start w-10/12 space-y-4">
            <h1 className="text-3xl font-semibold">Contact Us</h1>

            <h1 className="text-center font-light lg:text-left">
              We love hearing from our customers! If you have any questions,
              suggestions, or need assistance with your ticket booking, don't
              hesitate to get in touch. You can email us at [email address] or
              call us at [phone number]. Our team is available from [hours of
              operation] and is always eager to help make your ticket booking
              experience the best it can be. You can also contact us on the
              following channels
            </h1>
          </div>

          <div>
            {/* social media */}
            <div className="flex space-x-4">
              {/* facebook */}
              <button>
                <FaFacebook size={32} color="blue" />
              </button>
              {/* twitter */}
              <button>
                <FaXTwitter size={32} />
              </button>
              {/* twitter */}
              <button>
                <FaLinkedin size={32} color="blue" />
              </button>
            </div>
          </div>
        </div>

        {/* contact me form  */}
        <div className="w-full h-[90vh] bg-blue-500 flex flex-col items-center justify-center space-y-4">
          {/* first name and last last name */}
          <div className="w-10/12 flex flex-col md:flex-row  md:space-x-2  space-y-4 md:space-y-0">
                {/* first name */}
                <input type="text" className="p-2 border border-gray-500 rounded-lg w-full" placeholder="First name" />
                {/* last name */}
                <input type="text" className="p-2 border border-gray-500 rounded-lg w-full" placeholder="Last name" />
          </div>
          {/* phone number and email */}
          <div className="w-10/12 flex flex-col md:flex-row  md:space-x-2  space-y-4 md:space-y-0">
                {/* first name */}
                <input type="email" className="p-2 border border-gray-500 rounded-lg w-full" placeholder="Email" />
                {/* last name */}
                <input type="number" className="p-2 border border-gray-500 rounded-lg w-full" placeholder="000-000-000" />
          </div>
          {/* words */}
          <div className="w-10/12 flex flex-col   space-y-4 ">
                <textarea name="" id=""  className="rounded-lg p-2 text-gray-400 w-full md:h-40 h-80" defaultValue={"How may we help you"}/>
                 <button className="w-40 h-14 border rounded-xl text-white bg-blue-500 shadow-xl hover:bg-blue-600" type="button">
                  Submit
                 </button>


          </div>


        </div>
      </div>
    </Homerapper>
  );
}

export default page;
