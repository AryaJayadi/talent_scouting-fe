import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import Image from "../../assets/Student.jpg";
import JobRecommendationCard from "../component/JobRecommendationCard";
import CVTemplate from "../component/CVTemplate";
import { useParams } from "react-router-dom";
import { StudentCardProps } from "../props/StudentCardProps";
import axios from "axios";
import Cookies from "js-cookie";
import { capitalizeName, decrypt } from "../util/Utility.tsx";
import { Link } from "react-router-dom";

function StudentProfilePage() {
  const { studentId } = useParams();
  const [student, setStudent] = useState<StudentCardProps>();

  useEffect(() => {
    async function getStudentById() {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API + "getStudentById?studentId=" + studentId
        );
        setStudent(response.data);
      } catch (error) {}
    }
    getStudentById();
  }, []);

  return (
    <Layout>
      <div className="mx-[20vw] pt-10 flex justify-center pb-20">
        <div>
          <div className="flex items-center justify-center">
            <div className="rounded-[50%] w-[40%] h-[200px] flex justify-end">
              <img
                src={student?.picture_url}
                className="w-[200px] h-[200px] border-[1px] object-cover object-center rounded-[50%]"
              />
            </div>
            <div className="ml-16 w-[60%]">
              <div className="text-[3rem] font-semibold">
                {student
                  ? student.name
                  : capitalizeName(decrypt(Cookies.get("name")))}
              </div>
              <div className="text-[1.2rem]">{student?.nim}</div>
              <div className="text-[1.2rem]">{student?.major}</div>
              <div className="text-[1.2rem]">GPA: {student?.gpa}</div>
              <div className="text-[1.2rem]">{student?.email}</div>
              <div className="mt-2 flex gap-2">
                <Link to={student?.personal_url || ""} target="_blank">
                  <img
                    className="w-[30px] h-[30px] rounded-[50%]"
                    src={
                      "https://th.bing.com/th/id/OIP.-ZirgQE5pr8e7htQWowJIgHaHa?rs=1&pid=ImgDetMain"
                    }
                  />
                </Link>
                <Link to={student?.personal_url || ""} target="_blank">
                  <img
                    className="h-[30px] rounded-[50%]"
                    src={
                      "https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png"
                    }
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="text-[24px] font-medium mb-8 font-semibold">
              Job Recommendation
            </div>
            <div className="flex justify-between mt-6 gap-4">
              <JobRecommendationCard
                JobName={"Front End Developer"}
                Index={1}
              />
              <JobRecommendationCard JobName={"Back End Developer"} Index={2} />
              <JobRecommendationCard JobName={"AI Engineer"} Index={3} />
              <JobRecommendationCard
                JobName={"Full Stack Developer"}
                Index={4}
              />
            </div>
          </div>

          <div className="mt-10 w-full flex gap-10">
            <div>
              <div className="text-[24px] font-medium mb-2 font-semibold text-center sticky top-10">
                Curriculum Vitae
              </div>
              <div className="flex mt-6 w-full gap-10 sticky top-[100px]">
                <CVTemplate />
              </div>
            </div>

            <div className="w-full">
              <div className="text-[24px] font-medium mb-4 font-semibold">
                Work Experience
              </div>
              <div className="mb-4">
                <div className="text-[18px] font-semibold mb-2">
                  Junior Laboratory Assistant
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam incidunt consequatur omnis voluptate exercitationem rem
                  aspernatur facilis corrupti architecto fugiat pariatur nobis
                  molestias, magni neque aut sit sed distinctio minus.
                </div>
              </div>
              <div className="mb-4">
                <div className="text-[18px] font-semibold mb-2">
                  Junior Laboratory Assistant
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam incidunt consequatur omnis voluptate exercitationem rem
                  aspernatur facilis corrupti architecto fugiat pariatur nobis
                  molestias, magni neque aut sit sed distinctio minus.
                </div>
              </div>
              <div className="mb-4">
                <div className="text-[18px] font-semibold mb-2">
                  Junior Laboratory Assistant
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam incidunt consequatur omnis voluptate exercitationem rem
                  aspernatur facilis corrupti architecto fugiat pariatur nobis
                  molestias, magni neque aut sit sed distinctio minus.
                </div>
              </div>
              <div className="mb-4">
                <div className="text-[18px] font-semibold mb-2">
                  Junior Laboratory Assistant
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam incidunt consequatur omnis voluptate exercitationem rem
                  aspernatur facilis corrupti architecto fugiat pariatur nobis
                  molestias, magni neque aut sit sed distinctio minus.
                </div>
              </div>
              <div className="mb-4">
                <div className="text-[18px] font-semibold mb-2">
                  Junior Laboratory Assistant
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam incidunt consequatur omnis voluptate exercitationem rem
                  aspernatur facilis corrupti architecto fugiat pariatur nobis
                  molestias, magni neque aut sit sed distinctio minus.
                </div>
              </div>
              <div className="mb-4">
                <div className="text-[18px] font-semibold mb-2">
                  Junior Laboratory Assistant
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam incidunt consequatur omnis voluptate exercitationem rem
                  aspernatur facilis corrupti architecto fugiat pariatur nobis
                  molestias, magni neque aut sit sed distinctio minus.
                </div>
              </div>
              <div className="mb-4">
                <div className="text-[18px] font-semibold mb-2">
                  Junior Laboratory Assistant
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam incidunt consequatur omnis voluptate exercitationem rem
                  aspernatur facilis corrupti architecto fugiat pariatur nobis
                  molestias, magni neque aut sit sed distinctio minus.
                </div>
              </div>
              <div className="mb-4">
                <div className="text-[18px] font-semibold mb-2">
                  Junior Laboratory Assistant
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam incidunt consequatur omnis voluptate exercitationem rem
                  aspernatur facilis corrupti architecto fugiat pariatur nobis
                  molestias, magni neque aut sit sed distinctio minus.
                </div>
              </div>

              <div className="mt-10 w-full">
                <div className="text-[24px] font-medium mb-4 font-semibold">
                  Project
                </div>
                <div className="mb-4">
                  <div className="text-[18px] font-semibold mb-2">
                    AOL Web Programming (Ketring Website)
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam incidunt consequatur omnis voluptate exercitationem
                    rem aspernatur facilis corrupti architecto fugiat pariatur
                    nobis molestias, magni neque aut sit sed distinctio minus.
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-[18px] font-semibold mb-2">
                    AOL Web Programming (Ketring Website)
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam incidunt consequatur omnis voluptate exercitationem
                    rem aspernatur facilis corrupti architecto fugiat pariatur
                    nobis molestias, magni neque aut sit sed distinctio minus.
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-[18px] font-semibold mb-2">
                    AOL Web Programming (Ketring Website)
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam incidunt consequatur omnis voluptate exercitationem
                    rem aspernatur facilis corrupti architecto fugiat pariatur
                    nobis molestias, magni neque aut sit sed distinctio minus.
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-[18px] font-semibold mb-2">
                    AOL Web Programming (Ketring Website)
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam incidunt consequatur omnis voluptate exercitationem
                    rem aspernatur facilis corrupti architecto fugiat pariatur
                    nobis molestias, magni neque aut sit sed distinctio minus.
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-[18px] font-semibold mb-2">
                    AOL Web Programming (Ketring Website)
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam incidunt consequatur omnis voluptate exercitationem
                    rem aspernatur facilis corrupti architecto fugiat pariatur
                    nobis molestias, magni neque aut sit sed distinctio minus.
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-[18px] font-semibold mb-2">
                    AOL Web Programming (Ketring Website)
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam incidunt consequatur omnis voluptate exercitationem
                    rem aspernatur facilis corrupti architecto fugiat pariatur
                    nobis molestias, magni neque aut sit sed distinctio minus.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default StudentProfilePage;
