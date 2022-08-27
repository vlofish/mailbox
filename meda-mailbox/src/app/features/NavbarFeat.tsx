// =============================================================
import { Link } from 'react-router-dom';
import { MessageCounterFeat } from './MessageCounterFeat';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// =============================================================


const Navbar = () => (
	<Box sx={{ flexGrow: 1 }}>
		<AppBar position="static">
			<Toolbar>

				<div>
					<MessageCounterFeat />
					<nav
						style={{
							borderBottom: "solid 1px",
							paddingBottom: "1rem",
						}}
					>
						<Link to="splitview">Splitview</Link>
						|{" "}
						<Link to="singleview">Singleview</Link>
					</nav>
				</div>

			</Toolbar>
		</AppBar>
	</Box>
)

export default function NavbarFeat() {
	return <Navbar />
}
