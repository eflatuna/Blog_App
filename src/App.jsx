import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store from "./app/store";
import { ToastContainer } from "react-toastify";

function App() {
	const theme = createTheme({
		palette: {
			primary: {
				main: "#454F5B",
			},
			secondary: {
				main: "#454F5B",
				second: "#161C24",
			},
		},
		typography: {
			fontFamily: `"Lora", serif`,
			fontSize: 14,
			fontWeightLight: 300,
			fontWeightRegular: 400,
			fontWeightMedium: 500,
		},
	});
	return (
		<>
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					<AppRouter />
				</Provider>
				<ToastContainer />
			</ThemeProvider>
		</>
	);
}

export default App;
