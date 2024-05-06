// import { Box, Button, CardContent, Typography } from "@material-ui/core";
// import { Card, TextField } from "@mui/material";
// import React from "react";

// const CommentCard = () => {
// 	return (
// 		<Card
// 			sx={{
// 				mb: 2,
// 				display: "flex",
// 				flexDirection: "column",
// 				alignItems: "center",
// 				justifyContent: "center",
// 			}}
// 		>
// 			<CardContent>
// 				<Box sx={{ display: "flex", alignItems: "center" }}>
// 					<Typography variant="h6"></Typography>
// 				</Box>
// 				<Box
// 					sx={{
// 						mb: 2,
// 						display: "flex",
// 						flexDirection: "column",
// 						alignItems: "center",
// 						justifyContent: "center",
// 					}}
// 				>
// 					<TextField
// 						id="outlined-multiline-static"
// 						label="Comment"
// 						multiline
// 						rows={4}
// 						defaultValue="Add a comment"
// 					/>
// 					<Button>ADD COMMENT</Button>
// 				</Box>
// 			</CardContent>
// 		</Card>
// 	);
// };

// export default CommentCard;
import React from "react";
// import { useParams } from "react-router-dom";
// import { useEffect } from "react";
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	IconButton,
	Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Preview } from "@mui/icons-material";
import Comment from "@mui/icons-material/Comment";
import { useState } from "react";
import CommentForm from "./CommentForm";
// import useAxios from "../../hooks/useAxios";

const CommentCard = ({ data }) => {
	const [commentFormOpen, setCommentFormOpen] = useState(false);

	const handleComment = () => {
		console.log("Comment");
		setCommentFormOpen(!commentFormOpen);
	};
	// const [data, setData] = useState(null);
	// const { id } = useParams();
	// const BASE_URL = import.meta.env.VITE_BASE_URL;
	// const axiosWithToken = useAxios();

	// const getDetailsData = async () => {
	// 	try {
	// 		const response = await axiosWithToken.get(`${BASE_URL}blogs/${id}`);
	// 		setData(response.data.data);
	// 	} catch (error) {
	// 		console.error("Error fetching blog details:", error);
	// 	}
	// };
	// useEffect(() => {
	// 	getDetailsData();
	// }, [id]);

	// if (!data) {
	// 	return <div>Loading...</div>;
	// }

	return (
		<Box sx={{ px: 20, mb: 20 }}>
			<Card>
				{data.image && (
					<CardMedia
						component="img"
						height="400"
						image={data.image}
						alt={data.title}
						sx={{ objectFit: "contain" }}
					/>
				)}
				<CardContent>
					<Typography
						variant="h3"
						component="h1"
						align="center"
						gutterBottom
						sx={{ mt: 2 }}
					>
						{data.title}
					</Typography>
					<Typography
						variant="body1"
						component="p"
						align="center"
						sx={{ mt: 2 }}
					>
						{data.content}
					</Typography>
				</CardContent>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
				<IconButton aria-label="comment">
					<Comment onClick={handleComment} />
				</IconButton>
				<IconButton aria-label="preview">
					<Preview />
				</IconButton>
			</Card>
			{commentFormOpen && <CommentForm />}
		</Box>
	);
};

export default CommentCard;
