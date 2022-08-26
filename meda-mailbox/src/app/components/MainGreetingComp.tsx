// =========================================================================
import { Dispatch } from "redux";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ButtonComp } from "../components/ButtonComp";
import { MailboxInterface } from "../common/interfaces/";
import { fetchAllMessagesThunk } from "../common/store/thunks/mailbox.thunk";
import { MUI_WARNING_BUTTON } from "../common/constants/button.constant";
import { Box } from "@mui/system";
// =========================================================================

let total: number;
let unread: number;
let dispatch: Dispatch<any>;

export function MainGreetingComp() {
  dispatch = useDispatch();
  total = useSelector((state: MailboxInterface) => state.total);
  unread = useSelector((state: MailboxInterface) => state.unread);

  useEffect(() => {
    dispatch(fetchAllMessagesThunk());
  }, [])

  return (
    <Box>
      <label> {`You have ${unread} unread(s) out of ${total} messages.`} </label>
      <ButtonComp
        text="View Messages"
        mui={MUI_WARNING_BUTTON}
        handleClick={() => window.alert('Unimplemented') }
      />
    </Box>
  );
}
