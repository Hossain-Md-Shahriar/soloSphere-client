import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <p>Loading...</p>;

  if (user) return children;
  return <Navigate to="/login" state={location.pathname} replace={true} />; // upon navigating to login we take location where the user actually tried to go and also we replace that location with login in browser stack
};

export default PrivateRoute;
