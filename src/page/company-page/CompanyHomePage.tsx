import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { Input } from "@/components/ui/input";
import JobCard2 from "../component/JobCard2";
import StudentCard from "../component/StudentCard";
import { StudentCardProps } from "../props/StudentCardProps";
import "aos/dist/aos.css";
import AOS from "aos";
import axios from "axios";

function CompanyHomePage() {
  const [students, setStudents] = useState<StudentCardProps[]>([]);
  useEffect(() => {
    async function getStudents() {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API + "getAllStudent"
        );
        setStudents(response.data);
      } catch (error) {}
    }

    AOS.init({ duration: 500 });
    getStudents();
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
            We're thrilled to have you back on our platform! As a valued company
            stakeholder, you have access to a talented pool of students eager to
            make their mark in the industry. Take advantage of our tools to find
            the right candidates and post your job openings. Together, let's
            build the future by connecting bright minds with the right
            opportunities.
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
          <div className="text-[24px] font-medium mb-4 text-center">
            Browse student may fit with your company
          </div>

          <div className="text-center mb-6">
            Explore students who align with your company. Our candidates are
            eager learners with a passion for innovation, equipped to tackle
            challenges and bring fresh perspectives. They demonstrate strong
            problem-solving abilities, adaptability, and a collaborative spirit,
            making them a perfect fit for dynamic and forward-thinking
            environments.
          </div>

          <div className="grid grid-cols-4 w-full justify-between px-[10vw] gap-10">
            {students.map((student: StudentCardProps) => {
              return (
                <StudentCard
                  key={student.id}
                  id={student.id}
                  name={student.name}
                  nim={student.nim}
                  email={student.email}
                  phone={student.phone}
                  major={student.major}
                  address={student.address}
                  city={student.city}
                  state={student.state}
                  picture_url={student.picture_url}
                  description={student.description}
                  personal_url={student.personal_url}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CompanyHomePage;
