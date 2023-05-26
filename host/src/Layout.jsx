import { chakra } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<chakra.div>
			<chakra.header px={4} py={3}>
				<chakra.nav>
					<chakra.ul listStyleType="none" display="flex" gap={4} alignItems="center">
						<chakra.li>
							<chakra.a as={Link} to="/">
								Dashboard
							</chakra.a>
						</chakra.li>
						<chakra.li>
							<chakra.a as={Link} to="/login">
								Login
							</chakra.a>
						</chakra.li>
					</chakra.ul>
				</chakra.nav>
			</chakra.header>

			<chakra.main p={4}>
				<Outlet />
			</chakra.main>
		</chakra.div>
	);
}
