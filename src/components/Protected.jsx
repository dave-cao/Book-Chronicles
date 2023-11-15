import { Navigate } from "react-router-dom";
import { useEffect } from "react";
const Protected = ({ session, children }) => {

  useEffect(() => {
    alert("You need to sign in to access this!")
  }, [])

  if (!session) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};
export default Protected;
