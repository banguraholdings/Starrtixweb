import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Userheader from "./Userheader";

function Homerapper({ children }: any) {
  return (
    <main>
      <Userheader />
      {children}
      <Footer />
    </main>
  );
}

export default Homerapper;
