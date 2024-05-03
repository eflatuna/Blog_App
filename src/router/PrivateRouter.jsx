import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = ({ children }) => {
	const { currentUser } = useSelector((state) => state.auth);

	return currentUser ? children : <Navigate to="/" />;
};

export default PrivateRouter;
