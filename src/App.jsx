import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import StaffDetails from './pages/StaffDetails';
import Management from './pages/Management';
import Course from './pages/Course';
import Activities from './pages/Activities';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import useScrollToTop from './hooks/useScrollToTop';

function ScrollToTop() {
  useScrollToTop();
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public Routes with Navbar & Footer */}
        <Route path="/" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Home />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/about" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <AboutUs />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/staff-details" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <StaffDetails />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/management" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Management />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/course" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Course />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/activities" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Activities />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/gallery" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Gallery />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/contact" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Contact />
            </main>
            <Footer />
          </div>
        } />

        {/* Auth Routes (No Navbar/Footer) */}
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />

        {/* Protected Routes */}
        <Route path="/student/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
