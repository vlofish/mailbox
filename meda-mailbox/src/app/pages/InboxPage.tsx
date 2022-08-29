// =============================================================
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { PagePathEnum } from '../common/enums';
import { FeedbackFeat } from '../features/FeedbackFeat';
import { useMailboxNavigateTo } from '../common/hooks/mailbox.hook';

import AppBarPage from './AppBarPage';
import Grid from '@mui/material/Grid/Grid';
import Container from '@mui/material/Container';
// =============================================================

const Inbox = () => (
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
  const [, navigateToPath] = useMailboxNavigateTo();
  
  /**
   * Warmfix in the absence of URL guards
   */
  useEffect(() => {
    navigateToPath(PagePathEnum.INBOX_SPLIT_VIEW);
  }, []);

  return <Inbox />
}
