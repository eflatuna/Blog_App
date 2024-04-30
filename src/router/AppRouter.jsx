import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Login } from "@mui/icons-material";
import About from "../pages/About";
import NewBlog from "../pages/NewBlog";

const AppRouter = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="register" element={<Register />} />
				<Route path="login" element={<Login />} />
				<Route path="about" element={<About />} />
				<Route path="blog" element={<PrivateRouter />}>
					<Route path="" element={<Dashboard />} />
					<Route path="newBlog" element={<NewBlog />} />
				</Route>
			</Routes>
			<Footer />
		</Router>
	);
};

export default AppRouter;
