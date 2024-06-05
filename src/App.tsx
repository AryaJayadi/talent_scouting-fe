import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './page/LoginPage';
import HomePage from './page/HomePage';
import JobDetailPage from './page/JobDetailPage';
import CompanyDetailPage from './page/CompanyDetailPage';
import BrowseCompanyPage from './page/BrowseCompanyPage';

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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
