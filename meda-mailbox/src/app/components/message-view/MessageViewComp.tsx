import { Card, CardContent, Typography } from "@mui/material";

export function MessageViewComp(props: any) {
  return(
    <Card sx={{ minWidth: 50 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          From: {props.info.from}
          <br />
          Subject: {props.info.subject}
        </Typography>
        <Typography variant="body2">
          {props.info.message}
        </Typography>
      </CardContent>
      {props.children}
    </Card>
  );
}