import { createSlice, CreateSliceOptions} from "@reduxjs/toolkit";

const mailboxInitialState = {
  total: 10,
  unread: 5,
  message: {},
  messages: [],
  fetchingMessages: false,
}

const mailboxReducers = {
  // TODO: use the payload for the new state returned
  read: (state: any, payload: any) => {
    console.log(`%c Reducer [READ]`, 'background-color: purple, color: white');
    return {
      ...state,
      unread: payload.unread
    }
  },
  remove: (state: any, payload: any) => {
    console.log(`%c Reducer [REMOVE]`, 'background-color: purple, color: white');
    return {
      ...state,
      total: payload.total
    }
  },

  // TODO: not sure still about how to set the flag fetching...

  // TODO: fetch gets the specific selected message
  fetch: (state: any, payload: any) => {
    console.log(`%c Reducer [FETCH]`, 'background-color: purple, color: white');
    return {
      ...state,
      message: payload.message,
    }
  },
  // TODO: fetchAll gets all the messages for the sidebar preview
  fetchAll: (state: any, payload: any) => {
    console.log(`%c Reducer [FETCH ALL]`, 'background-color: purple, color: white');
    return {
      ...state,
      messages: payload.messages,
    }
  },
}

const mailboxSliceOptions: CreateSliceOptions = {
  name: 'mailbox-messages',
  initialState: mailboxInitialState,
  reducers: mailboxReducers,
}

export const mailboxSlice = createSlice(mailboxSliceOptions);
export const { read, remove, fetch, fetchAll } = mailboxSlice.actions;
export default mailboxSlice.reducer;