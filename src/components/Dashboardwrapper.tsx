import React from "react";

function Dashboardwrapper({ children }: any) {
  return (
    <div className="flex">
      <div className="h-screen bg-blue-300 relative lg:w-72 w-20 flex flex-col items-center">
        {/* header */}
        <h1 className="text-sm lg:text-4xl font-bold  text-blue-500 p-4">
          Sky
          <span className="text-sm lg:text-xl text-white text-border">tix</span>
        </h1>
      </div>
      <div className="flex-1 h-screen ">{children}</div>
    </div>
  );
}

export default Dashboardwrapper;
