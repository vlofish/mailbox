// ======================================================================
import { MailboxViewEnum } from "../../enums";
import { createSlice, CreateSliceOptions} from "@reduxjs/toolkit";
import { MailboxInterface, MailboxMessagesInterface, MailboxViewType } from "../../interfaces";
// ======================================================================

const mailboxInitialState: MailboxInterface = {
  total: 0,
  unread: 0,
  message: {},
  messages: [],
  fetchingMessages: false, // TODO: not sure still about how to set the flag fetching...
  currentView: MailboxViewEnum.SPLIT
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
  fetch: (state: any, { payload }: any) => {
    return {
      ...state,
      message: payload,
    }
  },
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
  clearMsgFromView: (state: any) => {
    return {
      ...state,
      message: {}
    }
  },
  updateMailboxView: (state: MailboxInterface, { payload }: { payload: MailboxViewType}) => {
    state.currentView = payload
  }
}

const mailboxSliceOptions: CreateSliceOptions = {
  name: 'mailbox-messages',
  initialState: mailboxInitialState,
  reducers: mailboxReducers,
}

export const mailboxSlice = createSlice(mailboxSliceOptions);
export const { markAsRead, remove, fetch, fetchAll, clearMsgFromView, updateMailboxView } = mailboxSlice.actions;
export default mailboxSlice.reducer;