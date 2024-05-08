import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
	name: "blogs",
	initialState: {
		blogs: [],
		categories: [],
		comments: [],
		loading: false,
		error: false,
	},
	reducers: {
		fetchStart: (state) => {
			state.loading = true;
			state.error = false;
		},
		getSuccess: (state, { payload: { data, url } }) => {
			// console.log(payload);
			state.loading = false;
			state[url] = data;
		},
		postSuccess: (state, { payload }) => {
			state.loading = false;
			state.error = false;

			// blogId ile doğru blogu bul ve yeni yorumu ekle
			const { blogId, comment } = payload;
			const blog = state.blogs.find((b) => b.id === blogId);

			if (blog) {
				blog.comments.push(comment); // Bulunan bloga yeni yorumu ekle
			}
		},
		fetchFail: (state) => {
			state.loading = false;
			state.error = true;
		},
	},
});
export const { getSuccess, fetchFail, fetchStart, postSuccess } =
	blogSlice.actions;

export default blogSlice.reducer;
