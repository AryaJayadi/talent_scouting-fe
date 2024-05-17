import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './page/LoginPage';
import HomePage from './page/HomePage';
import JobDetailPage from './page/JobDetailPage';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/detail" element={<JobDetailPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
