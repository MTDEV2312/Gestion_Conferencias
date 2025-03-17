import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login.jsx'
import Dashboard from './layouts/dashboard.jsx'
import Conferences from './pages/conferences.jsx';
import Speakers from './pages/speakers.jsx';
import Auditorium from './pages/auditorium.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/conferences" element={<Conferences />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/auditorium" element={<Auditorium />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
