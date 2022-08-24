import { createSlice, CreateSliceOptions} from "@reduxjs/toolkit";

const mailboxInitialState = {
  total: 0,
  unread: 0,
  message: {},
  messages: [],
  fetchingMessages: false,
}

const mailboxReducers = {
  // TODO: use the payload for the new state returned
  read: (state: any, payload: any) => {
    return {
      ...state,
      unread: payload.unread
    }
  },
  remove: (state: any, payload: any) => {
    return {
      ...state,
      total: payload.total
    }
  },

  // TODO: not sure still about how to set the flag fetching...

  // TODO: fetch gets the specific selected message
  fetch: (state: any, { payload }: any) => {
    return {
      ...state,
      message: payload,
    }
  },
  // TODO: fetchAll gets all the messages for the sidebar preview
  fetchAll: (state: any, { payload }: any) => {
    const total = payload.length;
    const unread = payload.filter((msg: {read: boolean}) => !msg.read).length;
    
    return {
      ...state,
      total,
      unread,
      messages: payload,
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