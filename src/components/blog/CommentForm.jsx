import {
	Box,
	Button,
	Card,
	CardContent,
	Divider,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const CommentForm = ({ onAddComment }) => {
	const [comment, setComment] = useState("");

	const addComment = () => {
		if (comment.trim() !== "") {
			const newComment = {
				text: comment,
				date: new Date().toISOString(), // Tarih bilgisi
			};
			onAddComment(newComment);
			setComment("");
		}
	};

	return (
		<Card
			sx={{
				mb: 8,
				mt: 2,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<CardContent>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<Typography variant="h6"></Typography>
				</Box>
				<Box
					sx={{
						mb: 2,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<TextField
						id="outlined-multiline-static"
						label="Add a comment"
						multiline
						rows={4}
						value={comment}
						onChange={(e) => setComment(e.target.value)}
						sx={{ marginBottom: "32px", width: 500 }}
					/>
					<Button
						variant="contained"
						sx={{ backgroundColor: "#18003C", width: 500 }}
						onClick={addComment}
					>
						ADD COMMENT
					</Button>
				</Box>
				<Box>
					{/* {comments.map((yorum, index) => (
						<>
							<Typography key={index} variant="body1">
								{yorum}
							</Typography>
							<Divider />
						</>
					))} */}
				</Box>
			</CardContent>
		</Card>
	);
};

export default CommentForm;
