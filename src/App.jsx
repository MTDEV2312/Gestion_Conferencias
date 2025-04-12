import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login.jsx'
import Dashboard from './layouts/dashboard.jsx'
import Conferences from './pages/conferences.jsx';
import Speakers from './pages/speakers.jsx';
import Auditorium from './pages/auditorium.jsx';
import Bookings from './pages/bookings.jsx';
import { AuthProvider } from './context/authProvider.jsx';
import { PrivateRoute } from './routers/privateRoutes.jsx';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>} />
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/auditorium" element={<Auditorium />} />
          <Route path="/bookings" element={
            <PrivateRoute>
              <Bookings />
            </PrivateRoute>
          } />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
