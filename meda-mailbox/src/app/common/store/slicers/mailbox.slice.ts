import { createSlice, CreateSliceOptions} from "@reduxjs/toolkit";
import { MailboxMessagesInterface } from "../../interfaces";

const mailboxInitialState = {
  total: 0,
  unread: 0,
  message: {},
  messages: [],
  fetchingMessages: false, // TODO: not sure still about how to set the flag fetching...
}

const getNumberOfUnread = (msgs: MailboxMessagesInterface[]) => msgs.filter(({ read }) => !read).length;

const mailboxReducers = {
  // TODO: use the payload for the new state returned
  read: (state: any, payload: any) => {
    return {
      ...state,
      unread: payload.unread
    }
  },
  // TODO: validate the below comment
  // According to redux docs this usese irm or something like that that allows to work immutable with mutable logic :P
  remove: (state: any, { payload }: any) => {
    const total = payload.length;
    const unread = getNumberOfUnread(payload);

    return {
      ...state,
      total,
      unread,
      messages: payload,
    }
  },

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
    const unread = getNumberOfUnread(payload);
    
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