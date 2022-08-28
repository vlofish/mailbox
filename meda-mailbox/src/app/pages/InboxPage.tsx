// =============================================================
import { Outlet } from 'react-router-dom';
import { FeedbackFeat } from '../features/FeedbackFeat';

import Container from '@mui/material/Container';
import AppBarPage from './AppBarPage';
// =============================================================

const Home = () => (
  <Container maxWidth="md">
    <AppBarPage />
    <Outlet />
    <FeedbackFeat />
  </Container>
)

export default function InboxPage() {
  return <Home />
}
