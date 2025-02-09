import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <>
        <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
          <div className="h-48 rounded-t dark:bg-gray-300"></div>
          <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-50">
            <div className="w-full h-6 rounded dark:bg-gray-300"></div>
            <div className="w-full h-6 rounded dark:bg-gray-300"></div>
            <div className="w-3/4 h-6 rounded dark:bg-gray-300"></div>
          </div>
        </div>
      </>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
};
PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoutes;
