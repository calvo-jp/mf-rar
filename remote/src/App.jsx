import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";

function App() {
	return (
		<ChakraProvider>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<Box p={4}>
								<Login />
							</Box>
						}
					/>
				</Routes>
			</BrowserRouter>
		</ChakraProvider>
	);
}

export default App;
