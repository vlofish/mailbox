// ======================================================================
import Grid from "@mui/material/Grid/Grid"
import { MessagePanelFeat } from "../features/MessagePanelFeat"
// ======================================================================

function PanelView() {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <MessagePanelFeat />
      </Grid>
    </Grid>
  )
}

export default function PanelViewPage() {
  return <PanelView />
}