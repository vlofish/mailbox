// ======================================================================
import Grid from "@mui/material/Grid/Grid"
import { MessageViewFeat } from "../features/MessageViewFeat"
import { MessagePanelFeat } from "../features/MessagePanelFeat"
// ======================================================================

function SplitView() {
  return (
    <Grid container spacing={2}>
      <h3>Split View</h3>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <MessagePanelFeat />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <MessageViewFeat />
      </Grid>
    </Grid>
  )
}

export default function SplitViewPage() {
  return <SplitView />
}