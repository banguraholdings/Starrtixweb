"use client";

import Userdashboardwrapper from "@/components/Userdashboardwrapper";
import React, { useState } from "react";
import QrReader from "react-qr-scanner";

function Page() {
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

  return (
    <Userdashboardwrapper>
      {/* container */}
      <div className="p-4 bg-red-500 w-full">
        {/* <QrReader
          delay={100}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
        />
        <p>{result}</p> */}
      </div>
    </Userdashboardwrapper>
  );
}

export default Page;
