import { MailboxMessagesInterface } from "../../interfaces";
import { createSlice, CreateSliceOptions} from "@reduxjs/toolkit";

const mailboxInitialState = {
  total: 0,
  unread: 0,
  message: {},
  messages: [],
  fetchingMessages: false, // TODO: not sure still about how to set the flag fetching...
}

const getNumberOfUnreadMsgs = (msgs: MailboxMessagesInterface[]) => msgs.filter(({ read }) => !read).length;

const mailboxReducers = {
  markAsRead: (state: any, { payload }: any) => {
    const unread = getNumberOfUnreadMsgs(payload);

    return {
      ...state,
      unread,
      messages: payload,
    }
  },
  // TODO: validate the below comment
  // TODO: since the logic is held in the thunk maybe call this `removed` instead of `remove`.
  // According to redux docs this usese irm or something like that that allows to work immutable with mutable logic :P
  remove: (state: any, { payload }: { payload: { notRemovedMessages: any, clearCurrentMessage: boolean } }) => {
    const total = payload.notRemovedMessages.length;
    const unread = getNumberOfUnreadMsgs(payload.notRemovedMessages);

    return {
      ...state,
      total,
      unread,
      message: payload.clearCurrentMessage ? {} : {...state.message},
      messages: payload.notRemovedMessages,
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
    const unread = getNumberOfUnreadMsgs(payload);
    
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
export const { markAsRead, remove, fetch, fetchAll } = mailboxSlice.actions;
export default mailboxSlice.reducer;