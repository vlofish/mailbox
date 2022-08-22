// =======================================================
import { Dispatch } from "@reduxjs/toolkit";
import mailboxSvc from "../../services/mailboxService";
import { fetch, fetchAll } from "../slicers/mailboxSlice";
// =======================================================

/**
 * Get messages from API and put 'em in the store
 * @returns 
 */
export function fetchAllMessagesThunk() {
  return function getMessages(dispatch: Dispatch, getState: Function) {
    // TODO: add debouncer from lodash or rxjs for protecting against many calls
    mailboxSvc.getMessages()
      .subscribe(
        (res: any) => dispatch(fetchAll(res))
      ) 
  }
}

export function fetchSpecificMessageThunk(categoryID: string) {
  return (dispatch: Dispatch, getState: Function) => {
    // TODO: add debouncer from lodash or rxjs for protecting against many calls
    mailboxSvc.getMessage(categoryID)
      .subscribe(
        (res: any) => {
          dispatch(fetch(res));
        }
      )
  }
}