import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { Input } from "@/components/ui/input";
import JobCard from "../component/JobCard";
import JobRecommendationCard from "../component/JobRecommendationCard";
import CompanyCard from "../component/CompanyCard";
import "aos/dist/aos.css";
import AOS from "aos";
import Marquee from "react-fast-marquee";
import { CompanyCardProps } from "../props/CompanyCardProps";
import axios from "axios";

const HomePage: React.FC = () => {
  const [companies, setCompanies] = useState<CompanyCardProps[]>([]);

  useEffect(() => {
    async function getAllCompany() {
      try {
        // console.log(process.env);
        const response = await axios.get("http://localhost:8080/getAllCompany");
        setCompanies(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    AOS.init({ duration: 500 });
    getAllCompany();
  }, []);

  return (
    <Layout>
      <div className="mx-[60px]">
        <div
          className="bg-[#120272] text-white p-[24px] mt-[30px] rounded-lg"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <div className="text-[32px]">Welcome Back Rico!!</div>
          <div className="mt-[10px]">
            We're excited to help you find your next opportunity! Start your job
            search today by browsing our latest vacancies or updating your
            profile to attract the best employers. Whether you're looking to
            advance your career or explore new paths, we're here to support you
            every step of the way.
          </div>
          <div className="mt-[30px] w-[30%]">
            <Input placeholder={"Let's find a job for you"} />
          </div>
        </div>

        {/* <div className='my-[50px] flex'>
                    <div className='w-1/2'>
                        <img src={"https://logodix.com/logo/81176.jpg"} className='w-[40vw] h-[25vw]'/>
                    </div>

                    <div className='w-1/2'>
                        <div className='text-[24px] font-semibold mb-4'>
                            Test Test Test
                        </div>
                        <div>
                            <div className='mb-4'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptas. Vitae dolore dolorum placeat! Similique neque sint ad dolore, vitae iusto ipsum quis dicta accusamus harum? Provident iusto excepturi qui!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptas. Vitae dolore dolorum placeat! Similique neque sint ad dolore, vitae iusto ipsum quis dicta accusamus harum? Provident iusto excepturi qui!
                            
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptas. Vitae dolore dolorum placeat! Similique neque sint ad dolore, vitae iusto ipsum quis dicta accusamus harum? Provident iusto excepturi qui!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptas. Vitae dolore dolorum placeat! Similique neque sint ad dolore, vitae iusto ipsum quis dicta accusamus harum? Provident iusto excepturi qui!
                            </div>
                        </div>
                    </div>
                </div> */}

        <div className="my-[50px]" data-aos="fade-up" data-aos-once="true">
          <div className="text-[24px] font-medium mb-2 text-center">
            Job Recommendation
          </div>

          <div className="mt-4 mb-8">
            Based on your profile and recent activity, we've handpicked some
            exciting job opportunities that match your skills and career goals.
            Explore these tailored recommendations and take the next step
            towards your dream job. Keep your profile updated to receive more
            accurate suggestions!
          </div>

          <div className="flex justify-between mt-6">
            <JobRecommendationCard JobName={"Front End Developer"} Index={1} />
            <JobRecommendationCard JobName={"Back End Developer"} Index={2} />
            <JobRecommendationCard JobName={"AI Engineer"} Index={3} />
            <JobRecommendationCard JobName={"Full Stack Developer"} Index={4} />
          </div>
        </div>

        <div
          className="mb-[100px] mt-20"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <Marquee speed={30}>
            <img
              src={"https://logodix.com/logo/81176.jpg"}
              className="h-[200px] mx-4"
            />
            <img
              src={
                "https://logodownload.org/wp-content/uploads/2014/09/nvidia-logo-0.png"
              }
              className="h-[200px] mx-4"
            />
            <img
              src={
                "https://img.freepik.com/free-vector/hand-drawn-cactus-logo-template_23-2149398900.jpg?w=2000&t=st=1661990015~exp=1661990615~hmac=466aebeda6573c752489cdbfe5c11ef1cbebf1ff984e8f62018952f83d9639f6"
              }
              className="h-[200px] mx-4"
            />
            <img
              src={
                "https://img.freepik.com/free-vector/hand-drawn-cactus-logo-template_23-2149398900.jpg?w=2000&t=st=1661990015~exp=1661990615~hmac=466aebeda6573c752489cdbfe5c11ef1cbebf1ff984e8f62018952f83d9639f6"
              }
              className="h-[200px] mx-4"
            />
            <img
              src={"https://logodix.com/logo/81176.jpg"}
              className="h-[200px] mx-4"
            />
            <img
              src={
                "https://th.bing.com/th/id/R.ff70d9d943a71067cb9e0f061c078fd0?rik=YDbEo%2fzsssVmPA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-HL8IH_ZHKvI%2fUl-kk_7AC_I%2fAAAAAAAAC6M%2fb7BWRYGdn8w%2fs1600%2fBCA-Bank-Logo-blue.png&ehk=7%2fTz85jERnSu1EVuPQi4qCQHtzNt%2bxTv%2fZiS0x4waYM%3d&risl=&pid=ImgRaw&r=0"
              }
              className="h-[200px] mx-4"
            />
          </Marquee>
        </div>

        <div className="my-[50px]" data-aos="fade-up" data-aos-once="true">
          <div className="text-[24px] font-medium mb-2 text-center">
            Popular Job
          </div>
          <div>
            These positions are trending among job seekers for their competitive
            salaries, growth opportunities, and dynamic work environments.
            Whether you're looking to advance your career or find a role that
            matches your passion, these popular jobs are in high demand. Don't
            miss your chance to apply!
          </div>

          <div className="grid grid-cols-5 mt-6 gap-10">
            <JobCard
              JobName={"Front End Developer"}
              CompanyName={"PT Bank Central Asia"}
              Image={
                "https://th.bing.com/th/id/R.ff70d9d943a71067cb9e0f061c078fd0?rik=YDbEo%2fzsssVmPA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-HL8IH_ZHKvI%2fUl-kk_7AC_I%2fAAAAAAAAC6M%2fb7BWRYGdn8w%2fs1600%2fBCA-Bank-Logo-blue.png&ehk=7%2fTz85jERnSu1EVuPQi4qCQHtzNt%2bxTv%2fZiS0x4waYM%3d&risl=&pid=ImgRaw&r=0"
              }
            />
            <JobCard
              JobName={"Back End Developer"}
              CompanyName={"PT CTI"}
              Image={
                "https://computradetech.com/wp-content/uploads/2021/07/New-Logo-CTI-Group-02.png"
              }
            />
            <JobCard
              JobName={"Full Stack Developer"}
              CompanyName={"PT Unilever"}
              Image={"https://logodix.com/logo/81176.jpg"}
            />
            <JobCard
              JobName={"AI Engineer"}
              CompanyName={"PT NVIDIA"}
              Image={
                "https://logodownload.org/wp-content/uploads/2014/09/nvidia-logo-0.png"
              }
            />
            <JobCard
              JobName={"Back End Developer"}
              CompanyName={"PT Ford Jakarta"}
              Image={
                "https://img.freepik.com/free-vector/hand-drawn-cactus-logo-template_23-2149398900.jpg?w=2000&t=st=1661990015~exp=1661990615~hmac=466aebeda6573c752489cdbfe5c11ef1cbebf1ff984e8f62018952f83d9639f6"
              }
            />
          </div>
        </div>

        <div className="my-[70px]" data-aos="fade-up" data-aos-once="true">
          <div className="text-[24px] font-medium mb-2 text-center">
            Top Companies for Software Developers
          </div>
          <div>
            These companies are known for their exciting projects, advanced
            technologies, and great work environments. If you're looking to grow
            your career as a software developer, these are the places to be.
            Check out the opportunities they offer!
          </div>

          <div className="grid grid-cols-3 mt-6 gap-10 mx-">
            {companies.map((company: CompanyCardProps, idx: number) => {
              console.log(company);
              return (
                <CompanyCard
                  id={company.id}
                  name={company.name}
                  logoUrl={company.logoUrl}
                  location={company.location}
                  VacancyCount={10}
                  description={company.description}
                  key={idx}
                />
              );
            })}
            {/* <CompanyCard
              CompanyName={"PT Binus University"}
              Image={
                "https://th.bing.com/th/id/OIP.orlY04-klLAbJn4WU-IqQwHaEK?rs=1&pid=ImgDetMain"
              }
              CompanyLocation={"Jakarta"}
              VacancyCount={10}
            /> */}
            {/* <CompanyCard
              CompanyName={"PT BCA"}
              Image={
                "https://th.bing.com/th/id/R.ff70d9d943a71067cb9e0f061c078fd0?rik=YDbEo%2fzsssVmPA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-HL8IH_ZHKvI%2fUl-kk_7AC_I%2fAAAAAAAAC6M%2fb7BWRYGdn8w%2fs1600%2fBCA-Bank-Logo-blue.png&ehk=7%2fTz85jERnSu1EVuPQi4qCQHtzNt%2bxTv%2fZiS0x4waYM%3d&risl=&pid=ImgRaw&r=0"
              }
              CompanyLocation={"Jakarta"}
              VacancyCount={10}
            />
            <CompanyCard
              CompanyName={"PT Unilever"}
              Image={"https://logodix.com/logo/81176.jpg"}
              CompanyLocation={"Jakarta"}
              VacancyCount={10}
            />
            <CompanyCard
              CompanyName={"PT CTI"}
              Image={
                "https://computradetech.com/wp-content/uploads/2021/07/New-Logo-CTI-Group-02.png"
              }
              CompanyLocation={"Jakarta"}
              VacancyCount={10}
            />
            <CompanyCard
              CompanyName={"PT NVIDIA"}
              Image={
                "https://logodownload.org/wp-content/uploads/2014/09/nvidia-logo-0.png"
              }
              CompanyLocation={"Jakarta"}
              VacancyCount={10}
            />
            <CompanyCard
              CompanyName={"PT Blue Cactus"}
              Image={
                "https://img.freepik.com/free-vector/hand-drawn-cactus-logo-template_23-2149398900.jpg?w=2000&t=st=1661990015~exp=1661990615~hmac=466aebeda6573c752489cdbfe5c11ef1cbebf1ff984e8f62018952f83d9639f6"
              }
              CompanyLocation={"Jakarta"}
              VacancyCount={10}
            /> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
