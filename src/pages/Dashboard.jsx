import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Card from "../components/blog/Card";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import useBlogCall from "../hooks/useBlogCalls";
// import useBlogCalls from "../hooks/useBlogCalls";

function Dashboard() {
	const { getBlogData } = useBlogCall();
	const { blogs } = useSelector((state) => state.blogs);
	console.log("blogs:", blogs);
	useEffect(() => {
		getBlogData("blogs");
	}, []);
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<Grid container spacing={2} mt={3}>
				{blogs.map((blog) => (
					<Grid item xs={12} md={6} lg={4} xl={3} key={firm._id}>
						<Card
							{...blogs}
							handleOpen={handleOpen}
							setInitialState={setInitialState}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

export default Dashboard;
