import React from "react";
import Temp from "./../../assets/logo_binus.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function AppliedRequest() {
  return (
    <Link
      to="/"
      className="flex justify-between items-center py-8 border-b-[1px] border-gray-400 px-8"
    >
      <div className="flex items-center">
        <img src={Temp} />
        <div className="ml-6">
          <div className="text-xl font-semibold">Front End Engineer</div>
          <div>at Bina Nusantara University</div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button className="bg-green-700 hover:bg-green-800">Accept</Button>
        <Button className="bg-red-600 hover:bg-red-800">Reject</Button>
      </div>
    </Link>
  );
}

export default AppliedRequest;
