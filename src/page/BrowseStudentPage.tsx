import React, { useEffect } from "react";
import Layout from "./layout/Layout";
import "aos/dist/aos.css";
import AOS from "aos";
import StudentCard from "./component/StudentCard";

function BrowseStudentPage() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <Layout>
      <div className="mx-[12vw] mb-10 mt-6">
        <div className="flex flex-col items-center" data-aos="fade-up">
          <div className="text-center font-semibold text-[24px]">
            1000+ Best Bina Nusantara Students
          </div>

          <div className="mt-4">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet Lorem ipsum dolor sit amet
          </div>
        </div>
        <div className="flex mt-10 w-full relative">
          <div
            className="w-1/4 bg-[#F0F0F0] h-[60vh] rounded-sm p-4 sticky top-20"
            data-aos="fade-up"
          >
            <div className="font-bold">Filters</div>
          </div>

          <div className="w-3/4 ml-10" data-aos="fade-up">
            <div className="grid grid-cols-3 gap-10">
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
      </div>
    </Layout>
  );
}

export default BrowseStudentPage;
