import React from "react";
import Temp from "./../../assets/logo_binus.png";
import { Link } from "react-router-dom";

function AppliedRequest() {
  return (
    <Link
      to="/"
      className="flex justify-between items-center py-8 border-b-[1px] border-black"
    >
      <div className="flex items-center">
        <img src={Temp} />
        <div className="ml-6">
          <div className="text-xl font-semibold">Front End Engineer</div>
          <div>at Bina Nusantara University</div>
        </div>
      </div>

      <div>
        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
          Waiting
        </span>
      </div>
    </Link>
  );
}

export default AppliedRequest;
