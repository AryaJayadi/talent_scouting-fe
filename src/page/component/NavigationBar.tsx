import React from "react";
import LogoBinus from "../../assets/logo_header.png";
import { Link, useLocation } from "react-router-dom";
import ProfileHeader from "./../component/ProfileHeader";

function NavigationBar() {
  const location = useLocation();

  return (
    <div className="w-full h-full flex px-[60px] items-center shadow-md">
      <div className="flex items-center mr-[32px]">
        <img src={LogoBinus} className="w-[100px]" />
      </div>

      <div>
        <Link
          className={`mx-[30px] text-[18px] font-medium ${
            location.pathname === "/home" ? "underline underline-offset-8" : ""
          }`}
          to={"/home"}
        >
          Home
        </Link>
        <Link
          className={`mx-[30px] text-[18px] font-medium ${
            location.pathname === "/browse-job"
              ? "underline underline-offset-8"
              : ""
          }`}
          to={"/browse-job"}
        >
          Job
        </Link>
        <Link
          className={`mx-[30px] text-[18px] font-medium ${
            location.pathname === "/browse-company"
              ? "underline underline-offset-8"
              : ""
          }`}
          to={"/browse-company"}
        >
          Company
        </Link>
        <Link
          className={`mx-[30px] text-[18px] font-medium ${
            location.pathname === "/profile"
              ? "underline underline-offset-8"
              : ""
          }`}
          to={"/profile"}
        >
          Profile
        </Link>

        <Link
          className={`mx-[30px] text-[18px] font-medium ${
            location.pathname === "/company/home"
              ? "underline underline-offset-8"
              : ""
          }`}
          to={"/company/home"}
        >
          Company
        </Link>
        <Link
          className={`mx-[30px] text-[18px] font-medium ${
            location.pathname === "/company/vacancy"
              ? "underline underline-offset-8"
              : ""
          }`}
          to={"/company/vacancy"}
        >
          Company Vacancy
        </Link>
        <Link
          className={`mx-[30px] text-[18px] font-medium ${
            location.pathname === "/company/browse-student"
              ? "underline underline-offset-8"
              : ""
          }`}
          to={"/company/browse-student"}
        >
          Students
        </Link>
      </div>

      <div className="ml-auto">
        <ProfileHeader />
      </div>
    </div>
  );
}

export default NavigationBar;
