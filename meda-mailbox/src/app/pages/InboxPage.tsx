// =============================================================
import { Outlet } from 'react-router-dom';
import { FeedbackFeat } from '../features/FeedbackFeat';

import Container from '@mui/material/Container';
import NavbarFeat from '../features/NavbarFeat';
// =============================================================

const Home = () => (
  <Container maxWidth="md">
    <NavbarFeat />
    <Outlet />
    <FeedbackFeat />
  </Container>
)

export default function InboxPage() {
  return <Home />
}
