import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import JobCard2 from "../component/JobCard2";
import Temp from "../../assets/logo_header.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CompanyCardProps } from "../props/CompanyCardProps";

function CompanyDetailPage() {
  const { companyId } = useParams();
  const [company, setCompany] = useState<CompanyCardProps>();

  useEffect(() => {
    async function getCompanyById() {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API + "company/get?id=" + companyId
        );
        setCompany(response.data);
      } catch (error) {}
    }

    getCompanyById();
  }, []);

  return (
    <Layout>
      <div className="w-full px-20 py-10">
        <div className="flex justify-center rounded-xl bg-[#F0F0F0] shadow-md">
          <img
            src={company?.logoUrl}
            className="h-[400px] transition hover:scale-110"
          />
        </div>

        <div className="mt-6 py-6 px-16 rounded-xl shadow-md">
          <div>
            <div className="text-[28px] font-bold">{company?.name}</div>
            <div className="">{company?.location}</div>
          </div>

          <div className="mt-4">
            <p>{company?.description}</p>

            {/* <div className='max-w-[100vw]'>
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                                

                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                        </div> */}
          </div>

          <div className="mt-10">
            <div className="text-[28px] font-bold">
              Job Vacancy at PT Ford Jakarta
            </div>
          </div>

          <div className="mt-6">
            <JobCard2
              StopTime={new Date()}
              Title={"Front End Developer"}
              Description={"Lorem"}
              ApplierCount={5}
            />
            <JobCard2
              StopTime={new Date()}
              Title={"Front End Developer"}
              Description={"Lorem"}
              ApplierCount={5}
            />
            <JobCard2
              StopTime={new Date()}
              Title={"Front End Developer"}
              Description={"Lorem"}
              ApplierCount={5}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CompanyDetailPage;
