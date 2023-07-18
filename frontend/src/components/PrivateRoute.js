import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authenticated = localStorage.getItem("authenticated") === "true";
  const navigate = useNavigate();

  if (!authenticated) {
    navigate("/login"); // Redirect to the login page if not authenticated
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
