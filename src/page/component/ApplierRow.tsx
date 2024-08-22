import React from "react";
import Temp from "./../../assets/logo_binus.png";
import { Button } from "@/components/ui/button";

function ApplierRow() {
  return (
    <div className="flex justify-between items-center border-b-2 px-4 py-8">
      <div className="flex items-center">
        <div className="mr-8">
          <img
            src={Temp}
            className="rounded-[50%] border-2 w-[125px] h-[125px] object-cover object-center"
          />
        </div>

        <div>
          <div className="text-[24px] font-semibold">Josua Golden Umboh</div>
          <div>Computer Science</div>
          <div>GPA: 3.98</div>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              Back End Developer
            </span>
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              Back End Developer
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className="my-2">
          <Button className="w-[100px] bg-[green] hover:bg-[darkgreen]">
            Approve
          </Button>
        </div>
        <div className="my-2">
          <Button className="w-[100px] bg-[red] hover:bg-[darkred]">
            Reject
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ApplierRow;
