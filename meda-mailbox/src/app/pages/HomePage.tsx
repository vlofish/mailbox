// =============================================================
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import SidebarFeat from '../features/SidebarFeat';
import { NavbarFeat } from "../features/NavbarFeat";
import { FeedbackFeat } from "../features/FeedbackFeat";
import { SearchMailFeat } from "../features/SearchMailFeat";
import { MessageViewFeat } from "../features/MessageViewFeat";
// =============================================================
/* 
const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));
 */

const HomeGrid = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<NavbarFeat />
			</Grid>
			<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
				<SearchMailFeat />
				<hr />
				<SidebarFeat />
			</Grid>
			<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
				<MessageViewFeat />
			</Grid>
			<Grid item xs={12}>
				<FeedbackFeat />
			</Grid>
		</Grid>
	);
}

export function HomePage() {
	return (
		<Container maxWidth="xl">
			<HomeGrid />
		</Container>
	);
}
