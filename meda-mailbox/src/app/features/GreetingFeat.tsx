// =========================================================================
// import { Dispatch } from "redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { ButtonComp } from "../components/ButtonComp";
import { MailboxInterface } from "../common/interfaces";
import { useMailboxDispatch } from "../common/hooks/mailbox.hook";
import { MUI_WARNING_BUTTON } from "../common/constants/button.constant";
import { fetchAllMessagesThunk } from "../common/store/thunks/mailbox.thunk";
// =========================================================================


/**
 * What I do?
 * 1. Load messages auto on mount
 * 2. Display the number of messages to the user.
 */
//TODO: receive the link we want to be redirected to?
export function GreetingFeat() {
  const dispatch = useMailboxDispatch();
  const total = useSelector((state: MailboxInterface) => state.total);
  const unread = useSelector((state: MailboxInterface) => state.unread);

  useEffect(() => {
    dispatch(fetchAllMessagesThunk());
  }, [])

  return (
    <Box>
      <label> {`You have ${unread} unread(s) out of ${total} messages.`} </label>
      <Link to='/home'>
        <ButtonComp
          text="View Messages"
          mui={MUI_WARNING_BUTTON}
        />
      </Link>
    </Box>
  );
}
