import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredAuth = true }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (requiredAuth && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
