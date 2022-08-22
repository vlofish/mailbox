import { configureStore } from "@reduxjs/toolkit";

import mailboxReducer from './slicers/mailboxSice';
import { fetchAllMessagesThunk } from "./thunks/mailboxThunk";

export default configureStore({
  reducer: mailboxReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { fetchAllMessagesThunk }
      }
    })
})