import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginAuthenticate = () => {

    console.log("checking auth")

    const state = useSelector((state: any) => state.user);

    const checkString = state.token;

    if (!checkString) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default LoginAuthenticate;
