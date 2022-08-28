// =============================================================
import { SearchMessageFeat } from './SearchMessageFeat';
import { MessageCounterFeat } from './MessageCounterFeat';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ToggleMailboxViewFeat } from './ToggleMailboxViewFeat';
// =============================================================

// TODO: this file most likely will become a page than a feature or a comp...

const Navbar = () => (
	<Box sx={{ flexGrow: 1 }}>
		<AppBar position="static">
			<Toolbar>

				<MessageCounterFeat />
				<SearchMessageFeat />
				<ToggleMailboxViewFeat />

			</Toolbar>
		</AppBar>
	</Box>
)

export default function NavbarFeat() {
	return <Navbar />
}
