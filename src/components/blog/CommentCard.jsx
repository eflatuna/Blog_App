import React from "react";
import { Card, CardContent, Divider, Typography } from "@mui/material";

const CommentCard = ({ createdAt, comment, userId, newComment }) => {
	const username = userId?.username || "Unknown User";
	const displayData = createdAt
		? new Date(createdAt).toLocaleString()
		: "Unknown Date";
	return (
		<Card sx={{ mb: 2 }}>
			<CardContent>
				<Typography variant="h6"> {username} </Typography>
				<Typography variant="body1">
					{" "}
					{comment || "No Comment"}{" "}
				</Typography>
				<Typography variant="caption">{displayData}</Typography>
				<Divider />

				{newComment && (
					<>
						<Typography variant="h6">New Comment:</Typography>
						<Typography variant="body1">
							{newComment.text}
						</Typography>
						<Typography variant="caption">
							{newComment.date
								? new Date(newComment.date).toLocaleString()
								: "Unknown Date"}
						</Typography>
					</>
				)}
				<Typography variant="body2"></Typography>
			</CardContent>
		</Card>
	);
};

export default CommentCard;
