import React from "react";
import Temp from "./../../assets/logo_binus.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CompanyVacancyProps } from "../props/CompanyVacancyProps";

const CompanyVacancy: React.FC<CompanyVacancyProps> = ({
  StopTime,
  Title,
  Description,
  ApplierCount,
}) => {
  return (
    <div className="border-2 p-6 shadow-md w-full rounded-xl mb-8 ">
      <div className="flex justify-between items-center">
        <div className="mr-8">
          <div className="flex mb-2 justify-between items-center">
            <div>
              <div className="text-[red] font-semibold">00:00:00 Time Left</div>
              <div className="text-[24px] font-semibold">{Title}</div>
            </div>

            <div>
              <img
                src={
                  "https://th.bing.com/th/id/R.ff70d9d943a71067cb9e0f061c078fd0?rik=YDbEo%2fzsssVmPA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-HL8IH_ZHKvI%2fUl-kk_7AC_I%2fAAAAAAAAC6M%2fb7BWRYGdn8w%2fs1600%2fBCA-Bank-Logo-blue.png&ehk=7%2fTz85jERnSu1EVuPQi4qCQHtzNt%2bxTv%2fZiS0x4waYM%3d&risl=&pid=ImgRaw&r=0"
                }
                className="h-[55px]"
              />
            </div>
          </div>
          <div
            className="mb-4"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            Lorem ipsum dolor sit amet
          </div>
        </div>

        <div className="ml-8">
          <div>
            <Link to={"/company-detail"}>
              <Button className="transition w-[120px] hover:scale-105">
                View Company
              </Button>
            </Link>
          </div>
          <div>
            <Link to={"/job-detail"}>
              <Button className="mt-2 transition w-[120px] hover:scale-105">
                View Detail
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="font-semibold">
        {ApplierCount.toString()} people apply to this job vacancy
      </div>
    </div>
  );
};

export default CompanyVacancy;
