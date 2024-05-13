import  { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoutes = ({ children }) => {
    const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
      </>
    );
  }
  if(user){
    return children
  }else{
    return <Navigate state={location.pathname} to='/login'></Navigate>
  }
  
};
PrivateRoutes.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default PrivateRoutes;