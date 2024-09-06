import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import AppliedRequest from "../component/AppliedRequest";
import CompanyRequest from "../component/CompanyRequest";
import axios from "axios";
import { useToast } from "@/components/hooks/use-toast";
import Cookies from "js-cookie";
import { decrypt } from "../util/Utility.tsx";
import Spinner from "../component/Spinner";
import { StudentRequestProps } from "../props/RequestProps.ts";
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
import { Link } from "react-router-dom";

function StudentRequestPage() {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [requests, setRequests] = useState<StudentRequestProps[]>([]);
  const { toast } = useToast();
  useEffect(() => {
    async function getRequestByStudentId() {
      setLoading(true);
      try {
        const body = {
          id: decrypt(Cookies.get("id")),
        };
        const response = await axios.post(
          import.meta.env.VITE_API + "getJobApplyByStudentId",
          body
        );
        setRequests(response.data);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: "Inform admin immediately!",
        });
      }
      setLoading(false);
    }
    getRequestByStudentId();
  }, []);
  return (
    <Layout>
      <div className="mt-10 mx-[10vw]">
        <div className="flex gap-10 border-b-[1px] border-black">
          <div
            style={active ? {} : { backgroundColor: "black", color: "white" }}
            className="p-2 rounded-t-xl transition hover:bg-[black] font-semibold hover:text-white cursor-pointer"
            onClick={() => setActive(!active)}
          >
            Applied Vacancy
          </div>
          <div
            style={active ? { backgroundColor: "black", color: "white" } : {}}
            className="p-2 rounded-t-xl transition font-semibold hover:bg-[black] hover:text-white cursor-pointer"
            onClick={() => setActive(!active)}
          >
            Company Request
          </div>
        </div>

        <div>
          {active ? (
            <div>
              <CompanyRequest />
              <CompanyRequest />
              <CompanyRequest />
            </div>
          ) : (
            <div>
              {loading ? (
                <div className="flex justify-center">
                  <Spinner />
                </div>
              ) : requests.length < 1 ? (
                <div className="text-center text-red-600">
                  You have no request
                </div>
              ) : (
                requests.map((req, idx) => {
                  console.log(req);

                  return (
                    <AlertDialog key={idx}>
                      <AlertDialogTrigger asChild>
                        <AppliedRequest
                          jobVacancy={req.jobVacancy}
                          notes={req.notes}
                          status={req.status}
                          student={req.student}
                          jobApplyPK={req.jobApplyPK}
                          companyNote={req.companyNote}
                        />
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle className="text-center">
                            Request {req.jobVacancy.jobPosition} at{" "}
                            {req.jobVacancy.company.name}
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            <div className="my-6 text-[black]">
                              <div className="mb-4">
                                Status:{" "}
                                {req.status === "Waiting" ? (
                                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                    Waiting
                                  </span>
                                ) : req.status === "Approved to Interview" ? (
                                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-700/10">
                                    Approved to Interview
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-700/10">
                                    Rejected
                                  </span>
                                )}
                              </div>
                              <div className="font-semibold">Your notes:</div>
                              <div className="mt-2">{req.notes}</div>

                              <div className="mt-6 font-semibold">
                                Company Notes:{" "}
                              </div>
                              <div className="mt-2">
                                {req.status === "Waiting"
                                  ? "Wait for company"
                                  : req.companyNote === ""
                                  ? "There is no notes from company"
                                  : req.companyNote}
                              </div>
                            </div>
                          </AlertDialogDescription>
                        </AlertDialogHeader>

                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <Link to={"/job-detail/" + req.jobVacancy.id}>
                            <AlertDialogAction>
                              See Job Detail
                            </AlertDialogAction>
                          </Link>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  );
                })
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default StudentRequestPage;
