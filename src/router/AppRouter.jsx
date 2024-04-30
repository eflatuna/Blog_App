import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Navbar from "../components/Navbar";

const AppRouter = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path="blog" element={<PrivateRouter />}>
					<Route path="" element={<Dashboard />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default AppRouter;
