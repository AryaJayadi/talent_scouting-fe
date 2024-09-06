import React, { useState } from "react";
import Layout from "../layout/Layout";
import AppliedRequest from "../component/AppliedRequest";
import CompanyRequest from "../component/CompanyRequest";

function CompanyRequestPage() {
  const [active, setActive] = useState(false);
  return (
    <Layout>
      <div className="mt-10 mx-[10vw]">
        <div className="flex gap-10 border-b-[1px] border-black">
          <div
            style={active ? {} : { backgroundColor: "black", color: "white" }}
            className="p-2 rounded-t-xl transition font-semibold hover:bg-[black] hover:text-white cursor-pointer"
            onClick={() => setActive(!active)}
          >
            Applied Vacancy
          </div>
          <div
            style={active ? { backgroundColor: "black", color: "white" } : {}}
            className="p-2 rounded-t-xl font-semibold transition hover:bg-[black] hover:text-white cursor-pointer"
            onClick={() => setActive(!active)}
          >
            Company Request
          </div>
        </div>

        <div>
          {active ? (
            <div className="h-[35vw] rounded-md overflow-auto">
              <CompanyRequest />
              <CompanyRequest />
              <CompanyRequest />
            </div>
          ) : (
            <div className="h-[35vw] rounded-md overflow-auto">
              <AppliedRequest />
              <AppliedRequest />
              <AppliedRequest />
              <AppliedRequest />
              <AppliedRequest />
              <AppliedRequest />
              <AppliedRequest />
              <AppliedRequest />
              <AppliedRequest />
              <AppliedRequest />
              <AppliedRequest />
              <AppliedRequest />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default CompanyRequestPage;
