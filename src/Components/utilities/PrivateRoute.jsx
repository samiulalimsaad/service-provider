import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../Firebase.init";

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);

    if (!loading && !user) {
        // navigate("/login", {
        //     state: {
        //         replace: true,
        //         from: location,
        //     },
        // });
        // return "null";
        return <Navigate to="/login" replace />;
        // return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;
