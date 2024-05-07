export const addComment = (comments, newComment) => {
	if (newComment.text.trim() === "") {
		throw new Error("Comment can't be empty");
	}
	return [...comments, newComment];
};
