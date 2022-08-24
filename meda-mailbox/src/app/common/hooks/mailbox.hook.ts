import { useDispatch } from "react-redux";
import { removeSpecificMessageThunk } from "../store/thunks/mailbox.thunk";

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
 
