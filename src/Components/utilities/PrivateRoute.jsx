import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const user = true;

    useEffect(() => {}, []);

    if (!user) {
        return <Navigate to="/login" replace />;
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;
