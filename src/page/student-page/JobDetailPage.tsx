import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import Temp from "../../assets/logo_header.png";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useParams } from "react-router-dom";
import { VacancyDetailResponse } from "../props/CompanyVacancyProps";
import axios from "axios";
import { useToast } from "@/components/hooks/use-toast";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { decrypt } from "../util/Utility.tsx";
import { useNavigate } from "react-router-dom";

function JobDetailPage() {
  const nav = useNavigate();
  const { vacancyId } = useParams();
  const { toast } = useToast();
  const [vacancy, setVacancy] = useState<VacancyDetailResponse>();
  const [notes, setNotes] = useState("");

  useEffect(() => {
    async function getVacancyById() {
      try {
        const vacancyResponse = await axios.get(
          import.meta.env.VITE_API +
            "getJobVacancyById?jobVacancyId=" +
            vacancyId
        );

        setVacancy(vacancyResponse.data);
        console.log(vacancyResponse.data);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: "Inform admin immediately!",
        });
      }
    }
    getVacancyById();
  }, []);

  async function handleApply() {
    try {
      const body = {
        jobApplyPK: {
          jobVacancyId: vacancyId,
          studentId: parseInt(decrypt(Cookies.get("id")) || "0"),
        },
        jobVacancy: {
          id: vacancyId,
        },
        student: {
          id: parseInt(decrypt(Cookies.get("id")) || "0"),
        },
        status: "Waiting",
        notes: notes,
      };

      const response = await axios.post(
        import.meta.env.VITE_API + "addJobApply",
        body
      );
      toast({
        variant: "default",
        title: "Apply Success!",
        description:
          "You have applied to " +
          vacancy?.jobVacancy.company.name +
          " as a " +
          vacancy?.jobVacancy.jobPosition +
          ". Let's wait for the company approve your request",
      });
      nav("/student/requests");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Inform admin immediately!",
      });
    }
  }

  return (
    <Layout>
      <div className="mt-6 pt-10 pb-20 mx-[20vw]">
        <div className="flex max-md:block">
          <div className="w-1/2 flex justify-center items-center rounded-md bg-[#F0F0F0] mr-12 ">
            <img
              src={vacancy?.jobVacancy.company.logoUrl}
              className="h-[200px] object-cover object-center transition hover:scale-110"
            />
          </div>
          <div className="w-1/2 max-sm:w-full">
            <div>
              <div className="text-[red] font-semibold">
                {vacancy?.jobVacancy.endDateTime
                  ? Math.ceil(
                      (new Date(vacancy?.jobVacancy.endDateTime).getTime() -
                        new Date().getTime()) /
                        (1000 * 60 * 60 * 24)
                    )
                  : ""}{" "}
                Days Left
              </div>
              <div className="font-bold text-[32px]">
                {vacancy?.jobVacancy.jobPosition}
              </div>
              <div className="font-bold text-[24px]">
                {vacancy?.jobVacancy.company.name}
              </div>
            </div>

            <div className="mt-2 font-medium">
              <div>{vacancy?.jobVacancy.location}</div>
              <div>{vacancy?.jobVacancy.jobType.jobTypeName}</div>
              <div>{vacancy?.jobVacancy.workTimeType}</div>
              <div>{vacancy?.jobVacancy.salaryRange}</div>
            </div>

            <div className="flex mt-4">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="mr-4 transition hover:scale-105">
                    Fast Apply
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-center">
                      Apply for Software Engineer at PT Ford Jakarta
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      <div className="my-6">
                        <div>Messages</div>
                        <div>
                          <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            className="w-full border-2 rounded-md p-2 mt-2"
                          ></textarea>
                        </div>

                        <div className="text-[red] mt-2">
                          <div className="font-semibold">Notes:</div>
                          <div>
                            After you apply to this company your profile will be
                            seen by company. You can not update your message
                            after you apply
                          </div>
                        </div>
                      </div>
                    </AlertDialogDescription>
                  </AlertDialogHeader>

                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleApply}>
                      Apply Now
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <Link to={"/company/" + vacancy?.jobVacancy.company.id}>
                <Button className="transition hover:scale-105">
                  View Company
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="text-[24px] font-medium mb-4 font-semibold">
            Description
          </div>
          <div>{vacancy?.jobVacancy.jobDescription}</div>
        </div>

        <div className="mt-10">
          <div className="text-[24px] font-medium mb-4 font-semibold">
            Requirements
          </div>

          <ul>
            {vacancy?.jobResponsibilities.map((responsibility) => {
              return (
                <li className="my-2">
                  - {responsibility.responsibilityDetail}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-10">
          <div className="text-[24px] font-medium mb-4 font-semibold">
            Skills and Tools
          </div>

          <div>
            <Accordion type="multiple" className="text-lg">
              {vacancy?.skills.map((s, idx) => {
                return (
                  <AccordionItem value={idx.toString()}>
                    <AccordionTrigger>{s.skill.skillName}</AccordionTrigger>
                    <AccordionContent className="text-[15px]">
                      {s.skillDetail}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>

        {vacancy?.extrasInfo.map((extras) => {
          return (
            <div className="mt-10">
              <div className="text-[24px] font-medium mb-4 font-semibold">
                {extras.extrasTitle}
              </div>

              <div>{extras.extrasDescription}</div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default JobDetailPage;
