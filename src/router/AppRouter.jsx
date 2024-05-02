import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import About from "../pages/About";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Detail from "../pages/Detail";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path="about" element={<About />} />
				<Route path="/" element={<Dashboard />} />

				<Route path="blog" element={<PrivateRouter />}>
					<Route path="newblog" element={<NewBlog />} />
					<Route path="detail" element={<Detail />} />
					<Route path="profile" element={<Profile />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default AppRouter;
