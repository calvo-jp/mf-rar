import { ChakraProvider, Spinner } from "@chakra-ui/react";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Layout from "./Layout";

const Login = lazy(() => import("remote/Login"));

export default function App() {
	return (
		<ChakraProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" Component={Layout}>
						<Route path="/" element={<Landing />} />
						<Route
							path="/login"
							element={
								<Suspense fallback={<Spinner size="sm" />}>
									<Login />
								</Suspense>
							}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</ChakraProvider>
	);
}
