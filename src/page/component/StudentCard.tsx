import React from "react";
import { StudentCardProps } from "../props/StudentCardProps";
import Temp from "./../../assets/logo_binus.png";
import { Link } from "react-router-dom";

const StudentCard: React.FC<StudentCardProps> = ({ StudentName, Image }) => {
  return (
    <Link
      to={"/job-detail"}
      className="border-2 rounded-md py-6 px-4 w-[15vw] h-auto "
    >
      <div className="flex justify-center mb-2">
        <img
          src={Image}
          className="w-[80px] rounded-[50%] h-[80px] object-cover object-center"
        />
      </div>
      <div className="mb-2">
        <div className="text-center text-[14px] font-semibold">
          {StudentName}
        </div>
        <div className="text-center text-[14px]">Computer Science</div>
        <div className="text-[14px] text-center">GPA: 3.98</div>
      </div>

      <div className="text-[14px] my-2">
        <div className="mb-1 text-center">Preferred position:</div>
        <div className="flex flex-wrap gap-2 justify-center">
          <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            Badge
          </span>
          <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            Badge
          </span>
          <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            Badge
          </span>
          <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            Badge
          </span>
        </div>
      </div>

      <div className="flex gap-2 justify-center mt-4">
        <div>
          <img
            className="w-[24px] h-[24px] rounded-[50%]"
            src={
              "https://th.bing.com/th/id/OIP.-ZirgQE5pr8e7htQWowJIgHaHa?rs=1&pid=ImgDetMain"
            }
          />
        </div>
        <div>
          <img
            className="w-[24px] h-[24px] rounded-[50%]"
            src={
              "https://th.bing.com/th/id/OIP.-ZirgQE5pr8e7htQWowJIgHaHa?rs=1&pid=ImgDetMain"
            }
          />
        </div>
        <div>
          <img
            className="w-[24px] h-[24px] rounded-[50%]"
            src={
              "https://th.bing.com/th/id/OIP.-ZirgQE5pr8e7htQWowJIgHaHa?rs=1&pid=ImgDetMain"
            }
          />
        </div>
        <div>
          <img
            className="w-[24px] h-[24px] rounded-[50%]"
            src={
              "https://th.bing.com/th/id/OIP.-ZirgQE5pr8e7htQWowJIgHaHa?rs=1&pid=ImgDetMain"
            }
          />
        </div>
      </div>
    </Link>
  );
};

export default StudentCard;
