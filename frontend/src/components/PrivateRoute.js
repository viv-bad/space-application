import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem("token");
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/login"); // Redirect to the login page if not authenticated
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
