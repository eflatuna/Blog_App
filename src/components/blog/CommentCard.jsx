import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const CommentCard = ({ createdAt, comment, userId }) => {
	return (
		<Card sx={{ mb: 2 }}>
			<CardContent>
				<Typography variant="h6"> {userId.username} </Typography>
				<Typography variant="body1"> {comment} </Typography>
				<Typography variant="caption">
					{" "}
					{new Date(createdAt).toLocaleString()}{" "}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CommentCard;
