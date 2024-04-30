import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import notFound from "../assets/image(10).png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
	let navigate = useNavigate();

	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				minHeight: "100vh",
				textAlign: "center",
			}}
		>
			<Box>
				<img src={notFound} alt="Page not found" width="500px" />
			</Box>

			<Button
				variant="contained"
				color="primary"
				sx={{ mt: 10, backgroundColor: "#18003C" }}
				onClick={() => navigate("/")}
			>
				Go Home
			</Button>
		</Container>
	);
};

export default NotFound;
