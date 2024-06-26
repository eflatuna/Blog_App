import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Button, styled } from "@mui/material";
import Comment from "@mui/icons-material/Comment";
import Preview from "@mui/icons-material/Preview";
import { useNavigate } from "react-router-dom";

export default function BlogCard({ _id, title, content, image }) {
	const navigate = useNavigate();

	return (
		<Card sx={{ maxWidth: 345 }} key={_id}>
			<CardMedia component="img" height="194" image={image} alt="" />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{content.length > 100
						? `${content.slice(0, 100)}...`
						: content}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
				<IconButton aria-label="comment">
					<Comment />
				</IconButton>
				<IconButton aria-label="preview">
					<Preview />
				</IconButton>

				<Button
					size="small"
					onClick={() => navigate(`/details/${_id}`)}
				>
					Read More
				</Button>
			</CardActions>
		</Card>
	);
}
