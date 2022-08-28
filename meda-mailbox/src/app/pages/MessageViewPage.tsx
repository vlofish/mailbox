/*
TODO:
 Seems that  there will be MessagePanelPage and MessageViewPage
 and there will be MessageOAnelFeat and MessageViewFeat

 SplitViewPage will call SingleViewPage and MessageViewPage 
*/

import { Grid } from "@mui/material";
import { MessageViewFeat } from "../features/MessageViewFeat";

const MessageView = () => (
  <Grid container spacing={2}>
    <h3>
      Message View
    </h3>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <MessageViewFeat />
    </Grid>
  </Grid>
);

export default function MessageViewPage() {
  return <MessageView />
}