import React from "react";
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

function JobDetailPage() {
  return (
    <Layout>
      <div className="mt-6 pt-10 pb-20 mx-[20vw]">
        <div className="flex max-md:block">
          <div className="w-1/2 flex justify-center items-center rounded-md bg-[#F0F0F0] mr-12 ">
            <img src={Temp} className="h-full transition hover:scale-110" />
          </div>
          <div className="w-1/2 max-sm:w-full">
            <div>
              <div className="text-[red] font-medium">00:00:00 Left</div>
              <div className="font-bold text-[32px]">Software Engineer</div>
              <div className="font-bold text-[24px]">PT Ford Jakarta</div>
            </div>

            <div className="mt-2 font-medium">
              <div>Jakarta Barat</div>
              <div>Full Time</div>
              <div>Rp 5.000.000 - Rp 10.000.000</div>
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
                          <textarea className="w-full border-2 rounded-md p-2 mt-2"></textarea>
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
                    <AlertDialogAction>Apply Now</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <Button className="transition hover:scale-105">
                View Company
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            debitis, optio repellat minus itaque recusandae veniam distinctio a
            praesentium similique! Dolorum distinctio ea quibusdam magni
            pariatur eos corporis numquam veritatis. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Doloremque debitis, optio repellat
            minus itaque recusandae veniam distinctio a praesentium similique!
            Dolorum distinctio ea quibusdam magni pariatur eos corporis numquam
            veritatis. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Doloremque debitis, optio repellat minus itaque recusandae veniam
            distinctio a praesentium similique! Dolorum distinctio ea quibusdam
            magni pariatur eos corporis numquam veritatis. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Doloremque debitis, optio
            repellat minus itaque recusandae veniam distinctio a praesentium
            similique! Dolorum distinctio ea quibusdam magni pariatur eos
            corporis numquam veritatis.
          </div>
        </div>

        <div className="mt-10">
          <div className="text-[24px] font-medium mb-4 font-semibold">
            Requirements
          </div>

          <ul>
            <li>
              Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum
              dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit
              amet Lorem ipsum dolot sit amet
            </li>
            <li>
              Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum
              dolot sit amet
            </li>
            <li>Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet</li>
            <li>Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet</li>
            <li>
              Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum
              dolot sit amet
            </li>
          </ul>
        </div>

        <div className="mt-10">
          <div className="text-[24px] font-medium mb-4 font-semibold">
            Skills and Tools
          </div>

          <div>
            <Accordion type="single" collapsible className="text-lg">
              <AccordionItem value="item-1">
                <AccordionTrigger>HTML</AccordionTrigger>
                <AccordionContent className="text-md">
                  Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem
                  ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum
                  dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot
                  sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>CSS</AccordionTrigger>
                <AccordionContent className="text-md">
                  Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem
                  ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum
                  dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot
                  sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Javascript</AccordionTrigger>
                <AccordionContent className="text-md">
                  Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem
                  ipsum dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum
                  dolot sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot
                  sit amet Lorem ipsum dolot sit amet Lorem ipsum dolot sit amet
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default JobDetailPage;
