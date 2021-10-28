import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import CryptoTable from "../Table/Table";
import Stats from "../Stats/Stats";

const HomePage = () => {

  useEffect(() => {
  }, []);

  return (
    <div>
      <Header />
      <Stats />
      <CryptoTable/>
    </div>
  );
};

export default HomePage;
