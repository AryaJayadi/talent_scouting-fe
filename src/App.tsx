import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './page/LoginPage';
import HomePage from './page/HomePage';
import JobDetailPage from './page/JobDetailPage';
import CompanyDetailPage from './page/CompanyDetailPage';
import BrowseCompanyPage from './page/BrowseCompanyPage';
import BrowseJobPage from './page/BrowseJobPage';
import CompanyHomePage from './page/CompanyHomePage';
import CompanyVacancyPage from './page/CompanyVacancyPage';
import NewVacancyPage from './page/NewVacancyPage';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/job-detail" element={<JobDetailPage/>} />
            <Route path="/company-detail" element={<CompanyDetailPage/>} />
            <Route path="/browse-company" element={<BrowseCompanyPage/>} />
            <Route path="/browse-job" element={<BrowseJobPage/>} />

            <Route path="/company/home" element={<CompanyHomePage/>} />
            <Route path="/company/vacancy" element={<CompanyVacancyPage/>} />
            <Route path="/company/new-vacancy" element={<NewVacancyPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
