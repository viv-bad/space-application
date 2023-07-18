import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const isAuthenticated = !!localStorage.getItem("token");
  const isAuthenticated = !!Cookies.get("token");
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/login"); // Redirect to the login page if not authenticated
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
