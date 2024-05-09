import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Typography,
	IconButton,
	Stack,
} from "@mui/material";

import { useState } from "react";
import useAxios from "../hooks/useAxios";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Preview } from "@mui/icons-material";
import Comment from "@mui/icons-material/Comment";
import CommentForm from "../components/blog/CommentForm";
import CommentCard from "../components/blog/CommentCard";

const Detail = () => {
	const { id } = useParams();
	const [data, setData] = useState(null);
	const [commentsOpen, setCommentsOpen] = useState(false);

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

	const toggleComments = () => {
		setCommentsOpen((prev) => !prev);
	};

	const handleAddComment = async (newComment) => {
		const newCommentWithBlogId = { ...newComment, blogId: id };

		await axiosWithToken.post(`${BASE_URL}comments`, newCommentWithBlogId);
		getDetailsData();
	};

	return (
		<Box sx={{ px: 20, mb: 20 }}>
			<Card>
				{data.image && (
					<CardMedia
						component="img"
						style={{
							maxWidth: "100vh",
							margin: "auto",
							marginBlockStart: "50px",
						}}
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
						sx={{
							fontSize: {
								lg: 40,
								md: 30,
								sm: 25,
								xs: 20,
							},
							mt: 2,
						}}
					>
						{data.title}
					</Typography>
					<Typography component="p" align="center" sx={{ mt: 2 }}>
						{data.content}
					</Typography>
				</CardContent>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
				<IconButton aria-label="comment" onClick={toggleComments}>
					<Comment />
				</IconButton>
				<IconButton aria-label="preview">
					<Preview />
				</IconButton>
			</Card>

			<Stack spacing={2}>
				{commentsOpen && (
					<Box>
						<CommentForm onAddComment={handleAddComment} />
						{data.comments.map((comment) => (
							<CommentCard key={comment._id} {...comment} />
						))}
					</Box>
				)}
			</Stack>
		</Box>
	);
};

export default Detail;

// const [likes, setLikes] = useState(0);
// const handleLikes = () => {
// 	setLikes(likes + 1);
// };
// const [share, setShare] = useState(0);
// const handleShare = () => {
// 	setShare(share + 1);
// };
// const [preview, setPreview] = useState(false);
// const handlePreview = () => {
// 	setPreview(!preview);
// };
