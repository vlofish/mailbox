import { configureStore } from "@reduxjs/toolkit";

import mailboxReducer from './slicers/mailboxSlice';
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