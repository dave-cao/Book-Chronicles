import { Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";
const Protected = ({ session, children }) => {


  if (!session) {
    toast.error("You need to sign-in to get access to this!")
    return <Navigate to="/Book-Chronicles/signin?denied=true" replace />;
  }
  return children;
};
export default Protected;
