import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
	username: Yup.string().min(3).max(15).required("Required!"),
	firstName: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	lastName: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	password: Yup.string()
		.min(8, "Er muss mindestens 8 Zeichen lang sein!")
		.max(50, "Er darf maximal 50 Zeichen lang sein!")
		.matches(/\d+/, "Muss mindestens eine Ziffer enthalten!")
		.matches(/[a-z]/, "Muss mindestens einen Kleinbuchstaben enthalten!")
		.matches(/[A-Z]/, "Muss mindestens einen Großbuchstaben enthalten!")
		.matches(
			/[@$?!%&*]+/,
			"Muss mindestens ein Sonderzeichen (@$!%*?&) enthalten!"
		)
		.required(),
});

const SignUpForm = ({
	values,
	handleChange,
	errors,
	touched,
	handleBlur,
	isSubmitting,
}) => {
	return (
		<div>
			<Form>
				<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
					<TextField
						id="username"
						name="username"
						label="Username"
						inputProps={{
							autoComplete: "off",
						}}
						value={values.username}
						onChange={handleChange}
						onBlur={handleBlur}
						helperText={touched.username && errors.username}
						error={touched.username && Boolean(errors.username)}
					/>
					<TextField
						label="First Name"
						name="firstName"
						id="firstName"
						inputProps={{
							autoComplete: "off",
						}}
						type="text"
						variant="outlined"
						value={values.firstName}
						onChange={handleChange}
						onBlur={handleBlur}
						helperText={touched.firstName && errors.firstName}
						error={touched.firstName && Boolean(errors.firstName)}
					/>
					<TextField
						label="Last Name"
						name="lastName"
						id="lastName"
						type="text"
						variant="outlined"
						value={values.lastName}
						onChange={handleChange}
						onBlur={handleBlur}
						helperText={touched.lastName && errors.lastName}
						error={touched.lastName && Boolean(errors.lastName)}
					/>
					<TextField
						label="Email"
						name="email"
						id="email"
						type="email"
						variant="outlined"
						value={values.email}
						onChange={handleChange}
						onBlur={handleBlur}
						helperText={touched.email && errors.email}
						error={touched.email && Boolean(errors.email)}
					/>
					<TextField
						label="Password"
						name="password"
						id="password"
						type="password"
						variant="outlined"
						value={values.password}
						onChange={handleChange}
						onBlur={handleBlur}
						helperText={touched.password && errors.password}
						error={touched.password && Boolean(errors.password)}
					/>

					<Button
						type="submit"
						variant="contained"
						size="large"
						disabled={isSubmitting}
						sx={{
							backgroundColor: "#18003C",
						}}
					>
						{isSubmitting ? "Loading..." : "Sign Up"}
					</Button>
				</Box>
			</Form>
		</div>
	);
};

export default SignUpForm;
