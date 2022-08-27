import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { GreetingFeat } from './GreetingFeat';

export function NavbarFeat() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
						<GreetingFeat />
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
