// =======================================================
import { Dispatch } from "@reduxjs/toolkit";
import mailboxSvc from "../../services/mailbox.service";
import { fetch, fetchAll, remove } from "../slicers/mailbox.slice";
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


// TODO: add debouncer from lodash or rxjs for protecting against many calls
// TODO: add err scenario
export const fetchSpecificMessageThunk = (categoryID: string) =>
  (dispatch: Dispatch) => {
    mailboxSvc.getMessage(categoryID)
      .subscribe(
        (res: any) => {
          dispatch(fetch(res));
        }
      )
  }


export const removeSpecificMessageThunk = (messageID: string) => 
  (dispatch: Dispatch, getState: Function) => {
    mailboxSvc.deleteMessage(messageID)
      .subscribe(
        () => {
          const filteredMsgs = [...getState().messages.filter((msg: { id: string}) => msg.id !== messageID)];
          dispatch(remove(filteredMsgs));
        }
      )
  }
