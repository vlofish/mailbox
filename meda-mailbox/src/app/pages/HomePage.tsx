// =============================================================
import { Outlet } from 'react-router-dom';

import Container from '@mui/material/Container';
import NavbarFeat from '../features/NavbarFeat';
// =============================================================

const Home = () => (
	<Container maxWidth="md">
		<NavbarFeat />
		<Outlet />
	</Container>
)

export default function HomePage() {
	return <Home />
}
