// =============================================================
import { SearchMessageFeat } from '../features/SearchMessageFeat';
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
					<ToggleMailboxViewFeat />
					<MessageCounterFeat />
					<SearchMessageFeat />
				</Toolbar>
			</AppBar>
		</Box>
	);
}

