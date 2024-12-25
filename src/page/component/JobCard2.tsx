import React from "react";
import Temp from "./../../assets/logo_binus.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CompanyVacancyWithApplyCountProps } from "../props/CompanyVacancyProps";
import TimeIcon from "../component/TimeIcon";
import { JobVacancy2 } from "../company-page/CompanyHomePage";

interface JobCard2Props {
  jobVacancy: JobVacancy2
  jobApplyCount: number
}

const JobCard2: React.FC<JobCard2Props> = ({
  jobVacancy,
  jobApplyCount,
}) => {
  return (
    <div className="border-2 p-6 shadow-md w-full rounded-xl mb-8 ">
      <div className="flex justify-between items-center">
        <div className="mr-8 w-full">
          <div className="flex mb-2 justify-between items-center">
            <div>
              <div className="text-[red] font-semibold flex">
                <div className="mr-2">
                  <TimeIcon />
                </div>
                {Math.ceil(
                  (new Date(jobVacancy?.EndDateTime).getTime() -
                    new Date().getTime()) /
                    (1000 * 60 * 60 * 24)
                )}{" "}
                Days Left
              </div>
              <div className="text-[24px] font-semibold mb-2 h-[70px]">
                {jobVacancy?.JobPosition}
              </div>
            </div>

            <div>
              <img src={jobVacancy?.Company.LogoUrl} className="h-[55px]" />
            </div>
          </div>
          <div
            className="mb-4 h-[50px]"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {jobVacancy?.JobDescription}
          </div>
        </div>

        <div className="ml-8">
          <div>
            <Link to={"/vacancy-applier/" + jobVacancy?.Id}>
              <Button className="mt-2 transition w-[120px] hover:scale-105">
                View Detail
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="font-semibold">
        {jobApplyCount.toString()} people apply to this job vacancy
      </div>
    </div>
  );
};

export default JobCard2;
