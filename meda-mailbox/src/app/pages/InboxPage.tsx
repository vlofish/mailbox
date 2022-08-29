// =============================================================
import { Outlet } from 'react-router-dom';
import { FeedbackFeat } from '../features/FeedbackFeat';

import Container from '@mui/material/Container';
import AppBarPage from './AppBarPage';
import Grid from '@mui/material/Grid/Grid';
// =============================================================

const Home = () => (
  <Container maxWidth="md">
    <Grid container rowSpacing={1}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <AppBarPage />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Outlet />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='text-align-right'>
        <FeedbackFeat />
      </Grid>
    </Grid>
  </Container>
)

export default function InboxPage() {
  return <Home />
}
