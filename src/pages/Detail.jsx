import React from "react";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import useBlogCall from "../hooks/useBlogCalls";

const Detail = () => {
	const { id } = useParams();
	const { getDetailsData, getBlogData } = useBlogCall();

	return <div>Detail</div>;
};

export default Detail;
