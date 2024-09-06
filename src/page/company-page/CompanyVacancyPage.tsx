import React, { useEffect, useState } from "react";
import JobCard2 from "../component/JobCard2";
import Layout from "../layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import { CompanyVacancyWithApplyCountProps } from "../props/CompanyVacancyProps";
import axios from "axios";
import { decrypt } from "../util/Utility";
import Cookies from "js-cookie";
import Spinner from "../component/Spinner";
import { useToast } from "@/components/hooks/use-toast";

function CompanyVacancyPage() {
  const [vacancy, setVacancy] = useState<CompanyVacancyWithApplyCountProps[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  useEffect(() => {
    AOS.init({ duration: 500 });

    async function getVacancyByCompanyId() {
      setLoading(true);
      try {
        const body = {
          id: decrypt(Cookies.get("id")),
        };

        const vacancies = await axios.post(
          import.meta.env.VITE_API + "getJobVacanciesByCompanyId",
          body
        );
        setVacancy(vacancies.data);
      } catch (e) {
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: "Inform admin immediately!",
        });
      }
      setLoading(false);
    }
    getVacancyByCompanyId();
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
          {loading ? (
            <Spinner />
          ) : vacancy.length < 1 ? (
            <div className="text-red-500 mt-10">There is no vancancy</div>
          ) : (
            vacancy.map((v) => {
              console.log(v);

              return (
                <JobCard2
                  jobVacancy={v.jobVacancy}
                  jobApplyCount={v.jobApplyCount}
                />
              );
            })
          )}
        </div>
      </div>
    </Layout>
  );
}

export default CompanyVacancyPage;
