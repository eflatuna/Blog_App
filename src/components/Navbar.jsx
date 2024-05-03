// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import logo from "../assets/museum.png";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import useAuthCall from "../hooks/useAuthCalls";

// const pages = ["Home", "New Blog", "About"];
// const loggedInSettings = ["My Blogs", "Profile", "Logout"];
// const loggedOutSettings = ["Login"];
// function Navbar() {
// 	const [anchorElNav, setAnchorElNav] = React.useState(null);
// 	const [anchorElUser, setAnchorElUser] = React.useState(null);
// 	const { currentUser } = useSelector((state) => state.auth);
// 	const navigate = useNavigate();
// 	const { logout } = useAuthCall();

// 	const handleOpenNavMenu = (event) => {
// 		setAnchorElNav(event.currentTarget);
// 	};
// 	const handleOpenUserMenu = (event) => {
// 		setAnchorElUser(event.currentTarget);
// 	};

// 	const handleCloseNavMenu = () => {
// 		setAnchorElNav(null);
// 	};

// 	const handleCloseUserMenu = () => {
// 		setAnchorElUser(null);
// 	};
// 	const handleMenuItemClick = (setting) => {
// 		if (setting === "Login") {
// 			navigate("/login");
// 		} else if (setting === "Logout") {
// 			logout();
// 		}
// 		handleCloseUserMenu();
// 	};
// 	const isUserLoggedIn = Boolean(currentUser);

// 	console.log(currentUser);

// 	const getUserInitial = (user) => {
// 		if (!user) return "U";
// 		const name = user.name || "";
// 		return name.charAt(0).toUpperCase();
// 	};
// 	return (
// 		<AppBar position="static" sx={{ backgroundColor: "#18003C" }}>
// 			<Container maxWidth="xl">
// 				<Toolbar disableGutters>
// 					<Typography
// 						variant="h6"
// 						noWrap
// 						component="a"
// 						href="#app-bar-with-responsive-menu"
// 						sx={{
// 							mr: 2,
// 							display: { xs: "none", md: "flex" },
// 							fontFamily: `"Lora", serif`,
// 							fontWeight: 700,
// 							letterSpacing: ".3rem",
// 							color: "inherit",
// 							textDecoration: "none",
// 						}}
// 					></Typography>

// 					<Box
// 						sx={{
// 							flexGrow: 1,
// 							display: { xs: "flex", md: "none" },
// 						}}
// 					>
// 						<IconButton
// 							size="large"
// 							aria-label="account of current user"
// 							aria-controls="menu-appbar"
// 							aria-haspopup="true"
// 							onClick={handleOpenNavMenu}
// 							color="inherit"
// 						>
// 							<MenuIcon />
// 						</IconButton>

// 						<Menu
// 							id="menu-appbar"
// 							anchorEl={anchorElNav}
// 							anchorOrigin={{
// 								vertical: "bottom",
// 								horizontal: "left",
// 							}}
// 							keepMounted
// 							transformOrigin={{
// 								vertical: "top",
// 								horizontal: "left",
// 							}}
// 							open={Boolean(anchorElNav)}
// 							onClose={handleCloseNavMenu}
// 							sx={{
// 								display: { xs: "block", md: "none" },
// 							}}
// 						>
// 							{pages.map((page) => (
// 								<MenuItem
// 									key={page}
// 									onClick={handleCloseNavMenu}
// 								>
// 									<Typography textAlign="center">
// 										{page}
// 									</Typography>
// 								</MenuItem>
// 							))}
// 						</Menu>
// 					</Box>
// 					<div>Deutche</div>
// 					<img
// 						src={logo}
// 						alt="Logo"
// 						style={{
// 							width: 40,
// 							height: 40,
// 							objectFit: "cover",
// 						}}
// 					/>
// 					<div>Museen</div>
// 					<Typography
// 						variant="h5"
// 						noWrap
// 						component="a"
// 						href="#app-bar-with-responsive-menu"
// 						sx={{
// 							mr: 2,
// 							display: { xs: "flex", md: "none" },
// 							flexGrow: 1,
// 							fontFamily: `"Lora", serif`,
// 							fontWeight: 700,
// 							letterSpacing: ".3rem",
// 							color: "inherit",
// 							textDecoration: "none",
// 						}}
// 					></Typography>
// 					<Box
// 						sx={{
// 							flexGrow: 1,
// 							display: { xs: "none", md: "flex" },
// 						}}
// 					>
// 						{pages.map((page) => (
// 							<Button
// 								key={page}
// 								onClick={handleCloseNavMenu}
// 								sx={{ my: 2, color: "white", display: "block" }}
// 							>
// 								{page}
// 							</Button>
// 						))}
// 					</Box>

// 					<Box sx={{ flexGrow: 0 }}>
// 						<Tooltip title="Open settings">
// 							<IconButton
// 								onClick={handleOpenUserMenu}
// 								sx={{ p: 0 }}
// 							>
// 								<Avatar>{getUserInitial(currentUser)}</Avatar>
// 							</IconButton>
// 						</Tooltip>

// 						<Menu
// 							sx={{ mt: "45px" }}
// 							id="menu-appbar"
// 							anchorEl={anchorElUser}
// 							anchorOrigin={{
// 								vertical: "top",
// 								horizontal: "right",
// 							}}
// 							keepMounted
// 							transformOrigin={{
// 								vertical: "top",
// 								horizontal: "right",
// 							}}
// 							open={Boolean(anchorElUser)}
// 							onClose={handleCloseUserMenu}
// 						>
// 							{(isUserLoggedIn
// 								? loggedInSettings
// 								: loggedOutSettings
// 							).map((setting) => (
// 								<MenuItem
// 									key={setting}
// 									onClick={() => handleMenuItemClick(setting)}
// 								>
// 									<Typography textAlign="center">
// 										{setting}
// 									</Typography>
// 								</MenuItem>
// 							))}
// 						</Menu>
// 					</Box>
// 				</Toolbar>
// 			</Container>
// 		</AppBar>
// 	);
// }
// export default Navbar;
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/museum.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuthCall from "../hooks/useAuthCalls";

const pages = [
	{ label: "Home", path: "/", id: 1 },
	{ label: "NewBlog", path: "/new-blog", id: 2 },
	{ label: "About", path: "/about", id: 3 },
];
const loggedInSettings = [
	{ label: "My Blog", path: "/my-blog", id: 1 },
	{ label: "Profile", path: "/profile", id: 2 },
	{ label: "Logout", path: "/", id: 3 },
];

const loggedOutSettings = [
	{ label: "Login", path: "/login", id: 1 },
	{ label: "Register", path: "/register", id: 2 },
];
function Navbar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const { currentUser } = useSelector((state) => state.auth);
	const navigate = useNavigate();
	const { logout } = useAuthCall();

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	const handleMenuItemClick = (item) => {
		if (item.label === "Logout") {
			logout();
		} else {
			navigate(item.path);
		}
		setAnchorElUser(null);
	};
	const isUserLoggedIn = Boolean(currentUser);

	console.log(currentUser);

	const getUserInitial = (user) => {
		if (!user) return "U";
		const name = user || "";
		return name.charAt(0).toUpperCase();
	};
	return (
		<AppBar position="static" sx={{ backgroundColor: "#18003C" }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: `"Lora", serif`,
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					></Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "flex", md: "none" },
						}}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>

						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem
									key={page.id}
									onClick={() => {
										setAnchorElNav(null);
										navigate(page.path);
									}}
								>
									<Typography textAlign="center">
										{page.label}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<div>Deutche</div>
					<img
						src={logo}
						alt="Logo"
						style={{
							width: 40,
							height: 40,
							objectFit: "cover",
						}}
					/>
					<div>Museen</div>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: `"Lora", serif`,
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					></Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
						}}
					>
						{pages.map((page) => (
							<Button
								key={page.id}
								onClick={() => {
									navigate(page.path);
									setAnchorElNav(null);
								}}
								sx={{ my: 2, color: "white", display: "block" }}
							>
								{page.label}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{ p: 0 }}
							>
								<Avatar>{getUserInitial(currentUser)}</Avatar>
							</IconButton>
						</Tooltip>

						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{(isUserLoggedIn
								? loggedInSettings
								: loggedOutSettings
							).map((item) => (
								<MenuItem
									key={item.id}
									onClick={() => handleMenuItemClick(item)}
								>
									<Typography textAlign="center">
										{item.label}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default Navbar;
