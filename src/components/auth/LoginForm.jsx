import { Button, CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import { useSelector } from "react-redux";
import { object, string } from "yup";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export const loginScheme = object({
	email: string()
		.email("Lutfen valid bir email giriniz")
		.required("Email zorunludur"),
	password: string().required("password zorunludur"),
});

const LoginForm = ({ values, handleChange, errors, touched, handleBlur }) => {
	const { loading } = useSelector((state) => state.auth);
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const toggleVisibility = () => {
		setIsPasswordVisible(!isPasswordVisible);
	};
	return (
		<Form>
			<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
					type={isPasswordVisible ? "text" : "password"}
					variant="outlined"
					value={values.password}
					onChange={handleChange}
					onBlur={handleBlur}
					helperText={touched.password && errors.password}
					error={touched.password && Boolean(errors.password)}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton onClick={toggleVisibility}>
									{!isPasswordVisible ? (
										<VisibilityOff />
									) : (
										<Visibility />
									)}
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
				{!loading ? (
					<Button
						variant="contained"
						type="submit"
						sx={{ backgroundColor: "#18003C" }}
					>
						Sign In
					</Button>
				) : (
					<Button variant="contained" disabled={loading}>
						<CircularProgress />
					</Button>
				)}

				{/* <Button
          variant="contained"
          type="submit"
          disabled={loading}
          startIcon={loading && <CircularProgress />}>
          Submit
        </Button> */}
			</Box>
		</Form>
	);
};

export default LoginForm;
