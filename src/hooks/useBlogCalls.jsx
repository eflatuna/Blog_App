import { useDispatch } from "react-redux";
import { getSuccess, fetchFail, fetchStart } from "../features/blogSlice";
import { useSelector } from "react-redux";
import useAxios from "./useAxios";

const useBlogCall = () => {
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.auth);
	const axiosWithToken = useAxios();

	const BASE_URL = import.meta.env.VITE_BASE_URL;

	const getBlogData = async (url) => {
		dispatch(fetchStart());
		try {
			const { data } = await axiosWithToken(`${url}`);
			console.log(data);

			dispatch(getSuccess({ data: data.data, url }));
		} catch (error) {
			console.log(error);
			dispatch(fetchFail());
		}
	};

	const getDetailsData = async (url) => {
		dispatch(fetchStart());
		try {
			const { data } = await axiosWithToken(`${url}/{id}`);
			console.log(data);

			dispatch(getSuccess({ data: data.data, url }));
		} catch (error) {
			console.log(error);
			dispatch(fetchFail());
		}
	};
	const getCommentsData = async (url) => {
		dispatch(fetchStart());
		try {
			const { data } = await axiosWithToken(`${url}/{userId}`);
			console.log(data);

			dispatch(getSuccess({ data: data.data, url }));
		} catch (error) {
			console.log(error);
			dispatch(fetchFail());
		}
	};

	return {
		getDetailsData,
		getBlogData,
		getCommentsData,
	};
};

export default useBlogCall;
