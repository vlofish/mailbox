export interface MailboxInterface {
  total: number;
  unread: number;
  message?: any;
  messages: any[];
  fetchingMessages?: boolean,
}