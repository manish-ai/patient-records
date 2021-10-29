import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import RepoTable from "../Table/Table";

const HomePage = () => {

  useEffect(() => {
  }, []);

  return (
    <div style={{background:"linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246)) rgb(255, 255, 255)"}}> 
      <Header />
      <RepoTable/>
    </div>
  );
};

export default HomePage;
