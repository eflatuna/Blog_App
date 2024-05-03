import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import About from "../pages/About";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Detail from "../pages/Detail";
import NotFound from "../pages/NotFound";
import MyBlog from "../pages/MyBlog";

const AppRouter = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path="about" element={<About />} />
				{/* <Route path="new-blog" element={<NewBlog />} /> */}
				{/* <Route path="profile" element={<Profile />} /> */}

				<Route
					path="/details/:id"
					element={
						<PrivateRouter>
							<Detail />
						</PrivateRouter>
					}
				></Route>
				<Route
					path="/my-blog"
					element={
						<PrivateRouter>
							<MyBlog />
						</PrivateRouter>
					}
				></Route>
				<Route
					path="/new-blog"
					element={
						<PrivateRouter>
							<NewBlog />
						</PrivateRouter>
					}
				></Route>

				<Route
					path="/profile"
					element={
						<PrivateRouter>
							<Profile />
						</PrivateRouter>
					}
				></Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default AppRouter;
