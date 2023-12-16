import React from "react";

function Signin() {
  return (
    <div className="flex w-full justify-center">
      <div className=" h-[100vh]  hidden w-full lg:block">
        <div className="lg:grid lg:grid-cols-2 lg:place-items-center h-full p-20 bg-blue-500">
          <div className="w-full h-full p-6 bg-blue-300 border-t-8 border-l-8">
            <img src="/background/main2.jpg" alt="" className="border-4" />
          </div>
          <div className="w-full h-full p-6 bg-blue-300 flex items-center justify-center font-serif text-lg">
          Seats So Good, You&apos;ll Feel Like Part of the Show!
          </div>
          <div className="w-full h-full p-6 bg-blue-300 flex items-center justify-center font-serif text-lg">
          Early Bird or Last Minute – Tickets on Your Terms!&quot;
          </div>
          <div className="w-full h-full p-6 bg-blue-300">
            {" "}
            <img src="/images/culture.jpg" alt="" className="border-4" />
          </div>
          <div className="w-full h-full p-6 bg-blue-300">
            <img src="/images/event2.jpg" alt="" className="border-4" />
          </div>
          <div className="w-full h-full p-6 bg-blue-300 border-b-8 border-r-8 border-black flex items-center justify-center font-serif text-lg">
          More than Just a Ticket – An Experience!
          </div>
        </div>
      </div>
      <div className="w-full h-[100vh] "></div>
    </div>
  );
}

export default Signin;
