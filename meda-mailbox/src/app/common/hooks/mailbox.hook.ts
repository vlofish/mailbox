// =========================================
import { 
  markMessageAsReadThunk,
  removeSpecificMessageThunk
} from "../store/thunks/mailbox.thunk";
import { useDispatch } from "react-redux";
// =========================================

const useMailboxDispatch = () => useDispatch<any>();

/**
 * Called for removing specific messages from the mailbox
 * @returns 
 */
export const useMessageRemoval = () => {
  const mailboxDispatch = useMailboxDispatch();
  const dispatchMessageRemoval = (messageID: string) => mailboxDispatch(removeSpecificMessageThunk(messageID));
  return [mailboxDispatch, dispatchMessageRemoval] as const;
}

/**
 * Called for marking specific message from the mailbox as read
 * @returns 
 */
export const useMessageAsRead = () => {
  const mailboxDispatch = useMailboxDispatch();
  const dispatchMessageAsRead = (messageID: string) => mailboxDispatch(markMessageAsReadThunk(messageID));
  return [mailboxDispatch, dispatchMessageAsRead] as const;
}
 
