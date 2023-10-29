import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";

const UserTemplate = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default UserTemplate;
