import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BlogCard from "../components/blog/Card";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import useBlogCall from "../hooks/useBlogCalls";
import { useEffect } from "react";

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
					<Grid item xs={12} md={6} lg={4} xl={3} key={blog._id}>
						<BlogCard
							{...blog}
							// handleOpen={handleOpen}
							// setInitialState={setInitialState}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

export default Dashboard;
