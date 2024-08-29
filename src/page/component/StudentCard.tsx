import React from "react";
import { StudentCardProps } from "../props/StudentCardProps";
import Temp from "./../../assets/logo_binus.png";
import { Link } from "react-router-dom";

const StudentCard: React.FC<StudentCardProps> = ({
  id,
  nim,
  name,
  email,
  phone,
  major,
  address,
  city,
  state,
  picture_url,
  description,
  personal_url,
}) => {
  return (
    <Link
      to={"/student-profile/" + id}
      className="border-2 rounded-md py-6 px-4 w-[15vw] h-auto "
    >
      <div className="flex justify-center mb-2">
        <img
          src={picture_url}
          className="w-[80px] rounded-[50%] h-[80px] object-cover object-center"
        />
      </div>
      <div className="mb-2">
        <div className="text-center text-[14px] font-semibold">{name}</div>
        <div className="text-center text-[14px]">{major}</div>
        <div className="text-[14px] text-center">GPA: 3.98</div>
      </div>

      <div className="text-[14px] my-2">
        <div className="mb-1 text-center">Strong position:</div>
        <div
          className="flex flex-wrap gap-2 justify-center"
          //   style={{
          //     display: "-webkit-box",
          //     WebkitLineClamp: 1,
          //     WebkitBoxOrient: "vertical",
          //     overflow: "hidden",
          //     textOverflow: "ellipsis",
          //   }}
        >
          <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            Front End Developer
          </span>

          <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
            AI Engineer
          </span>
          <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-blue-700/10">
            Back End Developer
          </span>
        </div>
      </div>
    </Link>
  );
};

export default StudentCard;
