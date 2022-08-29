export interface MailboxInterface {
  total: number;
  unread: number;
  message?: any;
  messages: any[];
  fetchingMessages?: boolean,
  currentView: MailboxViewType,
}

export interface MailboxMessagesInterface {
  id: string,
  read:boolean,
  subject: string,
  preview: string,
  content?: string
}

export type MailboxViewType = 'split' | 'panel';