// ======================================================================
import { Grid } from "@mui/material";
import { MessageViewFeat } from "../features/MessageViewFeat";
// ======================================================================

const MessageView = () => (
  <Grid container>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <MessageViewFeat />
    </Grid>
  </Grid>
);

export default function MessageViewPage() {
  return <MessageView />
}