// import React from "react";
// import { useParams } from "react-router-dom";
// import { useEffect } from "react";
// import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
// import CommentCard from "../components/blog/CommentCard";
// import { useState } from "react";
// import useAxios from "../hooks/useAxios";

// const Detail = () => {
// 	const [data, setData] = useState(null);
// 	const { id } = useParams();
// 	const BASE_URL = import.meta.env.VITE_BASE_URL;
// 	const axiosWithToken = useAxios();

// 	const getDetailsData = async () => {
// 		try {
// 			const response = await axiosWithToken.get(`${BASE_URL}blogs/${id}`);
// 			setData(response.data.data);
// 		} catch (error) {
// 			console.error("Error fetching blog details:", error);
// 		}
// 	};
// 	useEffect(() => {
// 		getDetailsData();
// 	}, [id]);

// 	if (!data) {
// 		return <div>Loading...</div>;
// 	}

// 	return (
// 		<Box sx={{ p: 4 }}>
// 			<Card>
// 				{data.image && (
// 					<CardMedia
// 						component="img"
// 						height="400"
// 						image={data.image}
// 						alt={data.title}
// 					/>
// 				)}
// 				<CardContent>
// 					<Typography
// 						variant="h3"
// 						component="h1"
// 						align="center"
// 						gutterBottom
// 					>
// 						{data.title}
// 					</Typography>
// 					<Typography variant="body1" component="p">
// 						{data.content}
// 					</Typography>
// 				</CardContent>
// 			</Card>
// 			<CommentCard />
// 		</Box>
// 	);
// };

// export default Detail;
// import React from "react";
// import CommentCard from "../components/blog/CommentCard";
// import CommentForm from "../components/blog/CommentForm";

// const Detail = () => {
// 	return (
// 		<div>
// 			<CommentCard />
// 			<CommentForm />
// 		</div>
// 	);
// };

// export default Detail;
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
// import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import CommentCard from "../components/blog/CommentCard";
import CommentForm from "../components/blog/CommentForm";

import { useState } from "react";
import useAxios from "../hooks/useAxios";

const Detail = () => {
	const [data, setData] = useState(null);
	const { id } = useParams();
	const BASE_URL = import.meta.env.VITE_BASE_URL;
	const axiosWithToken = useAxios();

	const getDetailsData = async () => {
		try {
			const response = await axiosWithToken.get(`${BASE_URL}blogs/${id}`);
			setData(response.data.data);
		} catch (error) {
			console.error("Error fetching blog details:", error);
		}
	};
	useEffect(() => {
		getDetailsData();
	}, [id]);

	if (!data) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<CommentCard data={data} />
			{/* <CommentForm data={data} /> */}
		</div>
	);
};
export default Detail;
