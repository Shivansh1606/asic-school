import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import useScrollToTop from './hooks/useScrollToTop';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const StaffDetails = lazy(() => import('./pages/StaffDetails'));
const Management = lazy(() => import('./pages/Management'));
const PresidentMessage = lazy(() => import('./pages/PresidentMessage'));
const SecretaryMessage = lazy(() => import('./pages/SecretaryMessage'));
const PrincipalMessage = lazy(() => import('./pages/PrincipalMessage'));
const Course = lazy(() => import('./pages/Course'));
const Activities = lazy(() => import('./pages/Activities'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const Registration = lazy(() => import('./pages/Registration'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#FDB813]"></div>
      <p className="mt-4 text-[#0C2E5C] font-semibold">Loading...</p>
    </div>
  </div>
);

function ScrollToTop() {
  useScrollToTop();
  return null;
}

// Layout wrapper for pages with Navbar and Footer
const PublicLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow">
      <Suspense fallback={<LoadingSpinner />}>
        {children}
      </Suspense>
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Public Routes with Navbar & Footer */}
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><AboutUs /></PublicLayout>} />
          <Route path="/staff-details" element={<PublicLayout><StaffDetails /></PublicLayout>} />
          <Route path="/management" element={<PublicLayout><Management /></PublicLayout>} />
          <Route path="/management/president-message" element={<PublicLayout><PresidentMessage /></PublicLayout>} />
          <Route path="/management/secretary-message" element={<PublicLayout><SecretaryMessage /></PublicLayout>} />
          <Route path="/management/principal-message" element={<PublicLayout><PrincipalMessage /></PublicLayout>} />
          <Route path="/course" element={<PublicLayout><Course /></PublicLayout>} />
          <Route path="/activities" element={<PublicLayout><Activities /></PublicLayout>} />
          <Route path="/gallery" element={<PublicLayout><Gallery /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />

          {/* Auth Routes (No Navbar/Footer) */}
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />

          {/* Protected Routes */}
          <Route 
            path="/student/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/staff/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />

          {/* 404 Redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
