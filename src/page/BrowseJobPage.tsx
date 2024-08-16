import React, { useEffect } from "react";
import Layout from "./layout/Layout";
import CompanyVacancy from "./component/CompanyVacancy";
import "aos/dist/aos.css";
import AOS from "aos";

function BrowseJobPage() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <Layout>
      <div className="mx-[8vw] mb-10 mt-6">
        <div className="flex flex-col items-center" data-aos="fade-up">
          <div className="text-center font-semibold text-[24px]">
            1000+ Software Engineer Jobs Vacancy
          </div>

          <div className="mt-4">
            Discover over 1000 job openings for software engineers. Whether
            you're an experienced professional or just starting out, there's a
            role that fits your skills and career goals. Start your search now
            and find the perfect job to advance your career in software
            engineering.
          </div>
        </div>

        <div className="flex mt-10 w-full relative">
          <div
            className="w-1/4 bg-[#F0F0F0] h-[60vh] rounded-sm p-4 sticky top-20"
            data-aos="fade-up"
          >
            <div className="font-bold">Filters</div>
          </div>

          <div className="w-3/4 ml-10" data-aos="fade-left">
            <div>
              <CompanyVacancy
                StopTime={new Date()}
                Title={"Front End Developer"}
                Description={"Lorem"}
                ApplierCount={5}
              />
              <CompanyVacancy
                StopTime={new Date()}
                Title={"Front End Developer"}
                Description={"Lorem"}
                ApplierCount={5}
              />
              <CompanyVacancy
                StopTime={new Date()}
                Title={"Front End Developer"}
                Description={"Lorem"}
                ApplierCount={5}
              />
              <CompanyVacancy
                StopTime={new Date()}
                Title={"Front End Developer"}
                Description={"Lorem"}
                ApplierCount={5}
              />
              <CompanyVacancy
                StopTime={new Date()}
                Title={"Front End Developer"}
                Description={"Lorem"}
                ApplierCount={5}
              />
              <CompanyVacancy
                StopTime={new Date()}
                Title={"Front End Developer"}
                Description={"Lorem"}
                ApplierCount={5}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BrowseJobPage;
