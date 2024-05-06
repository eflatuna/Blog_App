import React from "react";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import useBlogCall from "../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import CommentCard from "../components/blog/CommentCard";

const Detail = () => {
	const { id } = useParams();
	const { blogs } = useSelector((state) => state.blogs);
	const blog = blogs.find((b) => b._id === id);
	const { getBlogData } = useBlogCall();
	useEffect(() => {
		if (!blog) {
			getBlogData("blogs");
		}
	}, [blog]);

	if (!blog) {
		return <div>Loading...</div>;
	}

	return (
		<Box sx={{ p: 4 }}>
			<Card>
				{blog.image && (
					<CardMedia
						component="img"
						height="400"
						image={blog.image}
						alt={blog.title}
					/>
				)}
				<CardContent>
					<Typography
						variant="h3"
						component="h1"
						align="center"
						gutterBottom
					>
						{blog.title}
					</Typography>
					<Typography variant="body1" component="p">
						{blog.content}
					</Typography>
				</CardContent>
				<CommentCard />
			</Card>
		</Box>
	);
};

export default Detail;
