// =========================================================================
// import { Dispatch } from "redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Box } from "@mui/system";
import { MailboxInterface } from "../common/interfaces";
import { useMailboxDispatch } from "../common/hooks/mailbox.hook";
import { fetchAllMessagesThunk } from "../common/store/thunks/mailbox.thunk";
// =========================================================================


/**
 * 1. Load messages auto on mount
 * 2. Display the number of messages to the user.
 */
export function MessageCounterFeat() {
  const mailboxDispatch = useMailboxDispatch();
  const total = useSelector((state: MailboxInterface) => state.total);
  const unread = useSelector((state: MailboxInterface) => state.unread);

  useEffect(() => {
    mailboxDispatch(fetchAllMessagesThunk());
  }, [mailboxDispatch])

  return (
    <Box>
      <label> {`You have ${unread} unread(s) out of ${total} messages.`} </label>
    </Box>
  );
}
