import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import HomePage from "./page/student-page/HomePage";
import JobDetailPage from "./page/student-page/JobDetailPage";
import CompanyDetailPage from "./page/student-page/CompanyDetailPage";
import BrowseCompanyPage from "./page/student-page/BrowseCompanyPage";
import VacancyApplierPage from "./page/company-page/VacancyApplierPage";
import BrowseJobPage from "./page/student-page/BrowseJobPage";
import CompanyHomePage from "./page/company-page/CompanyHomePage";
import CompanyVacancyPage from "./page/company-page/CompanyVacancyPage";
import NewVacancyPage from "./page/company-page/NewVacancyPage";
import StudentProfilePage from "./page/company-page/StudentProfilePage";
import BrowseStudentPage from "./page/company-page/BrowseStudentPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/job-detail" element={<JobDetailPage />} />
            <Route path="/company-detail" element={<CompanyDetailPage />} />
            <Route path="/browse-company" element={<BrowseCompanyPage />} />
            <Route path="/browse-job" element={<BrowseJobPage />} />
            <Route path="/profile" element={<StudentProfilePage />} />
            <Route path="/vacancy-applier" element={<VacancyApplierPage />} />

            <Route path="/company/home" element={<CompanyHomePage />} />
            <Route path="/company/vacancy" element={<CompanyVacancyPage />} />
            <Route path="/company/new-vacancy" element={<NewVacancyPage />} />
            <Route
              path="/company/browse-student"
              element={<BrowseStudentPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
