import { Box, Button, CardContent, Typography } from "@material-ui/core";
import { Card, TextField } from "@mui/material";
import React from "react";

const CommentCard = ({ username, comment }) => {
	return (
		<Card
			sx={{
				mb: 2,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			{" "}
			<CardContent>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Typography variant="h6">{username}</Typography>
				</Box>

				<TextField
					id="outlined-multiline-static"
					label="Comment"
					multiline
					rows={4}
					defaultValue="Add a comment"
				/>
				<Button>ADD COMMENT</Button>
			</CardContent>
		</Card>
	);
};

export default CommentCard;
