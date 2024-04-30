import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Card from "../components/blog/Card";

function Dashboard() {
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<Card />
		</Box>
	);
}

export default Dashboard;
