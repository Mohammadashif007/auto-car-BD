import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <span className="loading loading-spinner text-error text-center"></span>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ form: location }} replace></Navigate>;
};

export default PrivateRoute;
