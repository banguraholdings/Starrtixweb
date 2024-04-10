import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Userheader from "./Userheader";

function Homwrapper({ children }: any) {
  return (
    <main>
      {/* <Header /> */}
    <Userheader/>
      {children}
      <Footer />
    </main>
  );
}

export default Homwrapper;
