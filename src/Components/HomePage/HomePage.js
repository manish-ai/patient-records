import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import PatientTable from "../Table/Table";

const HomePage = () => {

  useEffect(() => {
  }, []);

  return (
    <div> 
      <Header />
      <PatientTable/>
    </div>
  );
};

export default HomePage;
