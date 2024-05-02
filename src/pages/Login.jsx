import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";

import { Formik } from "formik";
// import useAuthCall from "../hooks/useAuthCall";
import LoginForm, { loginScheme } from "../components/auth/LoginForm";
import useAuthCall from "../hooks/useAuthCalls";

const Login = () => {
	const { login } = useAuthCall();
	return (
		<Container maxWidth="sm">
			<Grid
				container
				justifyContent="center"
				direction="row-reverse"
				sx={{
					height: "100vh",
					p: 2,
				}}
			>
				<Grid item xs={9}>
					<Avatar
						sx={{
							backgroundColor: "#18003C",
							m: "auto",
							width: 35,
							height: 35,
						}}
					>
						<LockIcon size="30" />
					</Avatar>
					<Typography
						variant="h5"
						align="center"
						mb={4}
						mt={1}
						color="#18003C"
					>
						Sign in
					</Typography>

					<Formik
						initialValues={{ email: "", password: "" }}
						validationSchema={loginScheme}
						onSubmit={(values, actions) => {
							login(values);
							actions.resetForm();
							actions.setSubmitting(false);
						}}
						component={(props) => <LoginForm {...props} />}
					></Formik>
					<Box
						sx={{
							textAlign: "center",
							mt: 2,
							color: "secondary.main",
						}}
					>
						<Link to="/register">
							Don't have an account? Sign Up
						</Link>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Login;
