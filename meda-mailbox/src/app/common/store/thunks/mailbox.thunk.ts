// =======================================================
import { Dispatch } from "@reduxjs/toolkit";
import mailboxSvc from "../../services/mailbox.service";
import { fetch, fetchAll, markAsRead, remove } from "../slicers/mailbox.slice";
// =======================================================

// TODO: add debouncer from lodash or rxjs for protecting against many calls
// TODO: add err scenario
export const fetchAllMessagesThunk = () =>
  (dispatch: Dispatch) => {
    mailboxSvc.getMessages()
      .subscribe(
        (res: any) => dispatch(fetchAll(res))
      )
  }


// TODO: handle better the err scenario.
// TODO: add debouncer for protecting against many calls.
/**
 * Gets a specific message to read.
 * Allows the possibility of redirect to a specific page for reading the message in the case that `pathToNavigate` is defined.
 * 
 * @param messageID 
 * @param categoryID 
 * @param navigateToPath A `useNavigate()` typeof Function.
 * @param pathToNavigate The path `/x/y/z` we want to navigate after getting the message.
 */
export const fetchSpecificMessageThunk = (messageID: string, categoryID: string, navigateToPath: Function = () => { }, pathToNavigate: string = '') =>
  (dispatch: Dispatch) => {
    mailboxSvc.getMessage(messageID, categoryID)
      .subscribe(
        (res: any) => {
          if(res) dispatch(fetch(res));
          if (res && pathToNavigate) navigateToPath(pathToNavigate);
        },
      )
  }

/**
 * Delete a specific message.
 * Allows the possibility of redirect to a specific page after deleting the message in the case that `pathToNavigate` is defined.
 * 
 * @param messageID 
 * @param navigateToPath A `useNavigate()` typeof Function.
 * @param pathToNavigate The path `/x/y/z` we want to navigate after getting the message.
 */
export const removeSpecificMessageThunk = (messageID: string, navigateToPath: Function = () => { }, pathToNavigate: string = '') =>
  (dispatch: Dispatch, getState: Function) => {
    mailboxSvc.deleteMessage(messageID)
      .subscribe(
        () => {
          const clearCurrentMessage = getState().message.id === messageID; // Clear message from view box
          const notRemovedMessages = [...getState().messages.filter((msg: { id: string }) => msg.id !== messageID)];
          const payload = {
            notRemovedMessages,
            clearCurrentMessage,
          }

          dispatch(remove(payload));
          if(pathToNavigate) navigateToPath(pathToNavigate);
        }
      )
  }

/**
 * Thunk for marking a message as read; calls API then updates store.
 * Changes the index of the array where the message that was read is located.
 * The prop telling whether the message is read or not is; `read`.
 * 
 * @param messageID The message to be marked as read
 */
export const markMessageAsReadThunk = (messageID: string) =>
  (dispatch: Dispatch, getState: Function) => {
    mailboxSvc.markMessageAsRead(messageID)
      .subscribe(
        () => {
          const messages = [...getState().messages];
          const indexOfReadMsg = messages.findIndex((msg: { id: string}) => msg.id === messageID);

          messages[indexOfReadMsg] = {
            ...messages[indexOfReadMsg],
            read: true,
          }

          dispatch(markAsRead(messages));
        }
      )
  }
