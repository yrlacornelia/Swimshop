
import Navbar from "./navbar/navbar";
import React from "react";
const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <div className=""> 
      {children}
      </div>
  
    </>
  );
};

export default Layout;