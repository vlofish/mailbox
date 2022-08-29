// =====================================================
import { Dispatch } from "redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { PagePathEnum } from "../common/enums/";
import { IsMessageReadComp } from "../components/IsMessageReadComp";
import { clearMsgFromView } from "../common/store/slicers/mailbox.slice";
import { MessageViewComp } from "../components/message-view/MessageViewComp";
import { ButtonCompInterface, MailboxInterface } from "../common/interfaces";
import { MessageActionsComp } from "../components/message-view/MessageActionsComp";
import { MUI_ERROR_BUTTON, MUI_WARNING_BUTTON } from "../common/constants/button.constant";
import { useMailboxNavigateTo, useMessageAsRead, useMessageRemoval } from "../common/hooks/mailbox.hook";
// =====================================================

let navigateToPath: any;

let mailboxDispatch: Dispatch<any>;

let removeMessageDispatch: (messageID: string) => Dispatch<any>;

const handleCloseMessageView = () => {
	mailboxDispatch(clearMsgFromView(null));
	navigateToPath(PagePathEnum.INBOX_PANEL_VIEW);
}

const handleRemovalOfSpecificMessage = (messageID: string) => {
	removeMessageDispatch(messageID);
	navigateToPath(PagePathEnum.INBOX_PANEL_VIEW);
}

export function MessageViewFeat() {
	[, navigateToPath] = useMailboxNavigateTo();

	[mailboxDispatch, removeMessageDispatch] = useMessageRemoval();

	const [, markMessageReadDispatch] = useMessageAsRead();

	const message = useSelector((state: MailboxInterface) => state.message);

	/**
	 * Each message displayed will be marked as read.
	 */
	useEffect(() => {
		markMessageReadDispatch(message.id);
	}, [message, markMessageReadDispatch]);

	const messageActions: ButtonCompInterface[] = [
		{
			text: 'Close',
			disabled:false,
			mui: MUI_WARNING_BUTTON,
			handleClick: () => { handleCloseMessageView() }
		},
		{
			text: 'Delete',
			disabled:false,
			mui: MUI_ERROR_BUTTON,
			handleClick: () => { handleRemovalOfSpecificMessage(message.id) },
		}
	]

	return (
		<>
			{
				message?.message
					?
					<>
						<MessageViewComp info={{ ...message }}>
							<MessageActionsComp actions={messageActions} />
						</MessageViewComp>
						<IsMessageReadComp isRead={!message.read} />
					</>
					: <></>
			}
		</>
	);
}
