// ======================================================================
import Grid from "@mui/material/Grid/Grid"
import { MessagePanelFeat } from "../features/MessagePanelFeat"
// ======================================================================

function SplitView() {
  return (
    <Grid container spacing={2}>
      <h3>Single View</h3>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <MessagePanelFeat />
      </Grid>
    </Grid>
  )
}

export default function SingleViewPage() {
  return <SplitView></SplitView>
}