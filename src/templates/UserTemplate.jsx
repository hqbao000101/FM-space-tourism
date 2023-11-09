import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import BackgroundHomeDesktop from "../assets/home/background-home-desktop.jpg";

const UserTemplate = () => {
  return (
    <div
      style={{
        background: `url(${BackgroundHomeDesktop}), lightgray 0px 0px / 100% 100% no-repeat`,
        mixBlendMode: "screen",
        backgroundSize: "cover",
      }}
    >
      <div className="h-screen py-10 mx-auto max-w-screen-2xl">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default UserTemplate;
