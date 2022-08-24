export interface MailboxMessagesInterface {
  id: string,
  read:boolean,
  subject: string,
  preview: string,
  content?: string
}