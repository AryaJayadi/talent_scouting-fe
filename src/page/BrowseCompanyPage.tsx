import React, { useEffect } from "react";
import Layout from "./layout/Layout";
import CompanyCard from "./component/CompanyCard";
import "aos/dist/aos.css";
import AOS from "aos";

function BrowseCompanyPage() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <Layout>
      <div className="mx-[8vw] mb-10 mt-6">
        <div className="flex flex-col items-center" data-aos="fade-up">
          <div className="text-center font-semibold text-[24px]">
            200+ Tech Company Around The World
          </div>
          <div className="mt-4">
            Explore opportunities with over 200 leading tech companies across
            the globe. From startups to established giants, these organizations
            are at the forefront of innovation. Find your next career move in a
            company that matches your ambitions.
          </div>
        </div>

        <div className="flex mt-10 w-full relative">
          <div
            className="w-1/4 bg-[#F0F0F0] h-[60vh] rounded-sm p-4 sticky top-16"
            data-aos="fade-up"
          >
            <div className="font-bold">Filters</div>
          </div>

          <div className="w-3/4 ml-10" data-aos="fade-left">
            <div className="grid grid-cols-2 gap-2">
              <CompanyCard
                CompanyName={"PT Ford Jakarta"}
                Image={"https://logodix.com/logo/81176.jpg"}
                CompanyLocation={"Jakarta"}
                VacancyCount={10}
              />
              <CompanyCard
                CompanyName={"PT Ford Jakarta"}
                Image={
                  "https://logodownload.org/wp-content/uploads/2014/09/nvidia-logo-0.png"
                }
                CompanyLocation={"Jakarta"}
                VacancyCount={10}
              />
              <CompanyCard
                CompanyName={"PT Ford Jakarta"}
                Image={
                  "https://img.freepik.com/free-vector/hand-drawn-cactus-logo-template_23-2149398900.jpg?w=2000&t=st=1661990015~exp=1661990615~hmac=466aebeda6573c752489cdbfe5c11ef1cbebf1ff984e8f62018952f83d9639f6"
                }
                CompanyLocation={"Jakarta"}
                VacancyCount={10}
              />
              <CompanyCard
                CompanyName={"PT Ford Jakarta"}
                Image={"https://logodix.com/logo/81176.jpg"}
                CompanyLocation={"Jakarta"}
                VacancyCount={10}
              />
              <CompanyCard
                CompanyName={"PT Ford Jakarta"}
                Image={
                  "https://th.bing.com/th/id/R.ff70d9d943a71067cb9e0f061c078fd0?rik=YDbEo%2fzsssVmPA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-HL8IH_ZHKvI%2fUl-kk_7AC_I%2fAAAAAAAAC6M%2fb7BWRYGdn8w%2fs1600%2fBCA-Bank-Logo-blue.png&ehk=7%2fTz85jERnSu1EVuPQi4qCQHtzNt%2bxTv%2fZiS0x4waYM%3d&risl=&pid=ImgRaw&r=0"
                }
                CompanyLocation={"Jakarta"}
                VacancyCount={10}
              />
              <CompanyCard
                CompanyName={"PT Ford Jakarta"}
                Image={"https://logodix.com/logo/81176.jpg"}
                CompanyLocation={"Jakarta"}
                VacancyCount={10}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BrowseCompanyPage;
