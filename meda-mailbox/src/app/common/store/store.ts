import { configureStore } from "@reduxjs/toolkit";

import mailboxReducer from './slicers/mailbox.slice';
import { fetchAllMessagesThunk } from "./thunks/mailbox.thunk";

export default configureStore({
  reducer: mailboxReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { fetchAllMessagesThunk }
      }
    })
})