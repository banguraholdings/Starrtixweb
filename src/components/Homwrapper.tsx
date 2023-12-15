import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Homwrapper({ children }: any) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default Homwrapper;
