// =============================================================
import '../common/common.css';
import Box from "@mui/material/Box/Box";
import Grid from "@mui/material/Grid/Grid";
import { GreetingFeat } from "../features/GreetingFeat";
// =============================================================

const boxStyle = {
  width: '100wh',
  height: '100vh',
  backgroundColor: 'primary.main',
  '&:hover': {
    backgroundColor: 'primary.dark',
  },
}

function Inbox() {
  return (
    <Grid container spacing={2} className='text-align-center'>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Box className='full-vector-height-width' sx={boxStyle}>
          <GreetingFeat />
        </Box>
      </Grid>
    </Grid>
  )
}

export default function InboxPage() {
  return <Inbox />
}
