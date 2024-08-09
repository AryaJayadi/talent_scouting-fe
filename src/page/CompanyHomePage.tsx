import React, { useEffect } from "react";
import Layout from "./layout/Layout";
import { Input } from "@/components/ui/input";
import VacancyPreviewCard from "./component/VacancyPreviewCard";
import JobCard2 from "./component/JobCard2";
import StudentCard from "./component/StudentCard";
import "aos/dist/aos.css";
import AOS from "aos";

function CompanyHomePage() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <Layout>
      <div className="mx-[60px] overflow-hidden pb-14">
        <div
          className="bg-[#120272] p-[24px] mt-[30px] rounded-md"
          data-aos="fade-up"
        >
          <div className="text-white text-[32px]">Welcome Back Rico!!</div>
          <div className="text-white mt-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            praesentium, dolore tempore accusantium ea voluptatem exercitationem
            quae voluptatibus quaerat magnam, blanditiis beatae quia. Et itaque
            reiciendis voluptatem, alias quasi aperiam. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Molestiae praesentium, dolore
            tempore accusantium ea voluptatem exercitationem quae voluptatibus
            quaerat magnam, blanditiis beatae quia. Et itaque reiciendis
            voluptatem, alias quasi aperiam.
          </div>
          <div className="mt-[30px] w-[30%]">
            <Input placeholder={"Let's find a job for you"} />
          </div>
        </div>

        <div data-aos="fade-up">
          <div className="text-[24px] font-medium my-10 text-center">
            Latest Vacancy
          </div>

          <div className="flex w-full gap-4">
            <JobCard2
              StopTime={new Date()}
              Title={"asdsa"}
              Description={"asdsad"}
              ApplierCount={4}
            />
            <JobCard2
              StopTime={new Date()}
              Title={"asdsa"}
              Description={"asdsad"}
              ApplierCount={4}
            />
            <JobCard2
              StopTime={new Date()}
              Title={"asdsa"}
              Description={"asdsad"}
              ApplierCount={4}
            />
          </div>
        </div>

        <div className="mt-[40px]" data-aos="fade-up" data-aos-once="true">
          <div className="text-[24px] font-medium mb-6 text-center">
            Browse Student
          </div>

          <div
            className="grid w-full justify-between px-[10vw] gap-10"
            style={{ gridTemplateColumns: "auto auto auto auto" }}
          >
            <StudentCard
              StudentName={"Josua Golden Umboh"}
              Image={"https://logodix.com/logo/81176.jpg"}
            />
            <StudentCard
              StudentName={"Josua Golden Umboh"}
              Image={"https://logodix.com/logo/81176.jpg"}
            />
            <StudentCard
              StudentName={"Josua Golden Umboh"}
              Image={"https://logodix.com/logo/81176.jpg"}
            />
            <StudentCard
              StudentName={"Josua Golden Umboh"}
              Image={"https://logodix.com/logo/81176.jpg"}
            />
            <StudentCard
              StudentName={"Josua Golden Umboh"}
              Image={"https://logodix.com/logo/81176.jpg"}
            />
            <StudentCard
              StudentName={"Josua Golden Umboh"}
              Image={"https://logodix.com/logo/81176.jpg"}
            />
            <StudentCard
              StudentName={"Josua Golden Umboh"}
              Image={"https://logodix.com/logo/81176.jpg"}
            />
            <StudentCard
              StudentName={"Josua Golden Umboh"}
              Image={"https://logodix.com/logo/81176.jpg"}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CompanyHomePage;
