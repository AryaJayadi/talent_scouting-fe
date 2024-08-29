import React, { useEffect } from "react";
import CompanyVacancy from "../component/CompanyVacancy";
import Layout from "../layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

function CompanyVacancyPage() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <Layout>
      <div className="mx-[70px]" data-aos="fade-up">
        <div className="text-[28px] mt-4 text-center font-semibold">
          Your Vacancy
        </div>

        <div className="my-6">
          <Link to={"/company/new-vacancy"}>
            <Button>+ New Vacancy</Button>
          </Link>
        </div>

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
        </div>
      </div>
    </Layout>
  );
}

export default CompanyVacancyPage;
