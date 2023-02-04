import { useHistory } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const history = useHistory();
  let checkId = sessionStorage.getItem("id");
  if (!checkId) {
    history.push("/account/login");
  }
  return <>{children}</>;
};

export default PrivateRoute;
