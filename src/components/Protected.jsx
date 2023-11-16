import { Navigate } from "react-router-dom";
const Protected = ({ session, children }) => {

  if (!session) {
    alert("You need to sign in to access this!")
    return <Navigate to="/Book-Chronicles/signin" replace />;
  }
  return children;
};
export default Protected;
