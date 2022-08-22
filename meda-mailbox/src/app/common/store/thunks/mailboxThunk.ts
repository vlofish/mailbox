import { Dispatch } from "@reduxjs/toolkit";
import mailboxSvc from "../../services/mailboxService";
import { fetchAll } from "../slicers/mailboxSlice";

// TODO: dispatch an action and call an API
// TODO: action in would be fetching e-mails; action out would be fetched e-mails.
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