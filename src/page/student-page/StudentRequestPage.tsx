import React, { useState } from "react";
import Layout from "../layout/Layout";
import AppliedRequest from "../component/AppliedRequest";
import CompanyRequest from "../component/CompanyRequest";

function StudentRequestPage() {
  const [active, setActive] = useState(false);
  return (
    <Layout>
      <div className="mt-10 mx-[10vw]">
        <div className="flex gap-10 border-b-[1px] border-black">
          <div
            style={active ? {} : { backgroundColor: "black", color: "white" }}
            className="p-2 rounded-t-xl transition hover:bg-[black] hover:text-white cursor-pointer"
            onClick={() => setActive(!active)}
          >
            Applied Vacancy
          </div>
          <div
            style={active ? { backgroundColor: "black", color: "white" } : {}}
            className="p-2 rounded-t-xl transition hover:bg-[black] hover:text-white cursor-pointer"
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

export default StudentRequestPage;
