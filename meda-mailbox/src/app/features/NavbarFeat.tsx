// =============================================================
import { SearchMessageFeat } from './SearchMessageFeat';
import { MessageCounterFeat } from './MessageCounterFeat';
import { ToggleMailboxViewFeat } from './ToggleMailboxViewFeat';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// =============================================================

// TODO: this file most likely will become a page than a feature or a comp...
// TODO: the above because there's no state habdling nor anything related.

export default function NavbarFeat() {
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

