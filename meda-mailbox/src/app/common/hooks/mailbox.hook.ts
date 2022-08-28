// =========================================
import {
  markMessageAsReadThunk,
  removeSpecificMessageThunk
} from "../store/thunks/mailbox.thunk";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// =========================================

export const useMailboxDispatch = () => useDispatch<any>();

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

/**
 * Wrapper for `useNavigate()`.
 * 
 * @returns [a, b]
 * [`a`] Exposure of the `useNavigate` hook.
 * [`b`] allowing to programmatically navigate to a page path.
 */
export const useMailboxNavigateTo = () => {
  const mailboxNavigate = useNavigate();
  const navigateToSpecificPath = (path: string) => mailboxNavigate(path, { replace: true });
  return [mailboxNavigate, navigateToSpecificPath] as const;
}

