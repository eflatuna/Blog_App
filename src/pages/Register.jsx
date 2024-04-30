import LockIcon from "@mui/icons-material/Lock";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import RegisterForm, { SignupSchema } from "../components/auth/RegisterForm";
import useAuthCall from "../hooks/useAuthCalls";

const Register = () => {
	const { register } = useAuthCall();
	return (
		<Container maxWidth="sm">
			<Grid
				container
				justifyContent="center"
				direction="row-reverse"
				rowSpacing={{ sm: 3 }}
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
						mb={2}
						mt={1}
						color="#18003C"
					>
						Sign up
					</Typography>

					<Formik
						initialValues={{
							username: "",
							firstName: "",
							lastName: "",
							email: "",
							password: "",
						}}
						validationSchema={SignupSchema}
						onSubmit={(values, actions) => {
							register(values);
							actions.resetForm();
							actions.setSubmitting(false);
						}}
						component={(props) => <RegisterForm {...props} />}
					></Formik>
					<Box
						sx={{
							textAlign: "center",
							mt: 2,
							color: "secondary.main",
						}}
					>
						<Link to="/">Already have an account? Sign in</Link>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Register;
