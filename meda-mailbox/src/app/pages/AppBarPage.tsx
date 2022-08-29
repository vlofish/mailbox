// =============================================================
import { MessageCounterFeat } from '../features/MessageCounterFeat';
import { ToggleMailboxViewFeat } from '../features/ToggleMailboxViewFeat';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// =============================================================

export default function AppBarPage() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<MessageCounterFeat />
					<ToggleMailboxViewFeat />
					{/* TODO: implement the search functionality */}
					{/* <SearchMessageFeat /> */}
				</Toolbar>
			</AppBar>
		</Box>
	);
}

