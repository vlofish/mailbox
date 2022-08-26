// =============================================================
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { NavbarFeat } from "../features/NavbarFeat";
import { SidebarFeat } from '../features/SidebarFeat';
import { FeedbackFeat } from "../features/FeedbackFeat";
import { MessageViewFeat } from "../features/MessageViewFeat";
// =============================================================

const HomeGrid = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<NavbarFeat />
			</Grid>
			<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
				<SidebarFeat />
			</Grid>
			<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
		<Container maxWidth="md">
			<HomeGrid />
		</Container>
	);
}
