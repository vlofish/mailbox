import mailboxSvc from "../../services/mailboxService";
import { fetchAll } from "../slicers/mailboxSice";

// TODO: dispatch an action and call an API
// TODO: action in would be fetching e-mails; action out would be fetched e-mails.
/**
 * Get messages from API and put 'em in the store
 * @returns 
 */
export function fetchAllMessagesThunk() {
  return function getMessages(dispatch: any, getState: any) {
    mailboxSvc.getMessages().subscribe(
      (res: any) => {
        dispatch(fetchAll(res));
      }
    )
  }
}