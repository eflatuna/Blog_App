import React from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import useBlogCall from "../hooks/useBlogCalls";
import { modalStyle } from "../styles/globalStyle";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const NewBlog = () => {
	const { postBlogData } = useBlogCall();
	const { blogs } = useSelector((state) => state.blogs);
	const [open, setOpen] = useState(false);

	// const [initialState, setInitialState] = useState({
	// 	categoryId: "",
	// 	title: "",
	// 	image: "",
	// 	content: "",
	// 	isPublish: "",
	// });
	// console.log("blogs:", blogs);
	// console.log("blogs:", initialState);
	const [info, setInfo] = React.useState({
		// categoryId: "",
		title: "",
		image: "",
		content: "",
		// isPublish: "",
	});
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
		setInfo({
			// categoryId: "",
			title: "",
			image: "",
			content: "",
			// isPublish: "",
		});
	};
	const handleChange = (e) => {
		setInfo({ ...info, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		postBlogData("blogs", info);
		handleClose();
	};

	useEffect(() => {
		postBlogData("blogs");
	}, []);
	return (
		<div>
			<Button onClick={handleOpen} variant="contained">
				Add Blog
			</Button>
			<Modal
				open={open}
				onClose={handleClose} //* onClose mui modal'a ait bir fonksiyondur.
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={modalStyle}>
					<Box
						component="form"
						onSubmit={handleSubmit}
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 2,
						}}
					>
						<TextField
							label="Title"
							name="title"
							id="title"
							type="text"
							variant="outlined"
							value={info.title}
							//   onChange={(e)=> setInfo({...info, name:e.target.value})}
							onChange={handleChange}
						/>
						<TextField
							label="Image URL"
							name="image"
							id="image"
							type="url"
							variant="outlined"
							value={info.image}
							//   onChange={(e)=> setInfo({...info, address:e.target.value})}
							onChange={handleChange}
						/>
						{/* <TextField
							label="Category"
							name="categoryId"
							id="categoryId"
							type="text"
							variant="outlined"
							value={info.categoryId}
							onChange={handleChange}
						/>
						<TextField
							label="Status"
							name="isPublish"
							id="isPublish"
							type="text"
							variant="outlined"
							value={info.isPublish}
							onChange={handleChange}
						/> */}
						<TextField
							label="Content"
							name="content"
							id="content"
							type="text"
							variant="outlined"
							value={info.content}
							onChange={handleChange}
						/>
						<Button
							type="submit"
							variant="contained"
							onClick={handleOpen}
							sx={{ backgroundColor: "#18003C", width: 400 }}
						>
							New Blog
						</Button>
					</Box>
				</Box>
			</Modal>
		</div>
	);
};

export default NewBlog;
