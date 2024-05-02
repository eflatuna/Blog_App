import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, Typography } from "@material-ui/core";
// import TodayIcon from "@material-ui/icons/Today";

const useStyles = makeStyles({
	root: {
		width: "100%",
		position: "fixed",
		bottom: 0,
		color: "white",
		backgroundColor: "#18003C", // Adjust color as needed
	},
	footerText: {
		marginTop: 15,
		marginLeft: 10,
		marginRight: 10,
		fontFamily: `"Lora", serif`,
	},
});

function Footer() {
	const classes = useStyles();
	const currentDate = new Date().getFullYear();

	return (
		<BottomNavigation className={classes.root}>
			<Typography variant="body2" className={classes.footerText}>
				Developed by eflatuna
			</Typography>
			<Typography variant="body2" className={classes.footerText}>
				Copyright ©{currentDate}
			</Typography>
		</BottomNavigation>
	);
}

export default Footer;
