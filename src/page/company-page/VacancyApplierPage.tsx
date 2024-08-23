import React from "react";
import Layout from "../layout/Layout";
import ApplierRow from "../component/ApplierRow";
import Image from "../../assets/logo_binus.png";
import { Button } from "@/components/ui/button";

function VacancyApplierPage() {
  return (
    <Layout>
      <div className="mt-6 pt-10 pb-20 mx-[20vw]">
        <div className="flex max-md:block">
          <div className="w-1/2 flex justify-center items-center rounded-md p-4 bg-[#F0F0F0] mr-12 ">
            <img src={Image} className="h-full transition hover:scale-110" />
          </div>
          <div className="w-1/2 max-sm:w-full">
            <div>
              <div className="text-[red] font-medium">00:00:00 Left</div>
              <div className="font-bold text-[32px]">
                Front End Developer Front End
              </div>
              <div className="font-bold text-[24px]">PT Ford Jakarta</div>
            </div>

            <div className="mt-2 font-medium">
              <div>Jakarta Barat</div>
              <div>Full Time</div>
              <div>Rp 5.000.000 - Rp 10.000.000</div>
              <div className="mt-2">
                <Button>Student Preview</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="text-[24px] mb-2 text-center">Job Applier</div>
          <div className="text-center mb-4">
            You need to approve or reject all of applier before XX January 2024
          </div>

          <div>
            <ApplierRow />
            <ApplierRow />
            <ApplierRow />
            <ApplierRow />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default VacancyApplierPage;
