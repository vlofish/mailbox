// =====================================================
import { Dispatch } from "redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { MailboxInterface } from "../common/interfaces";
import { PagePathEnum } from "../common/enums/page-paths.enum";
import { clearMsgFromView } from "../common/store/slicers/mailbox.slice";
import { MessageViewComp } from "../components/message-view/MessageViewComp";
import { MessageActionsComp } from "../components/message-view/MessageActionsComp";
import { MUI_ERROR_BUTTON, MUI_WARNING_BUTTON } from "../common/constants/button.constant";
import { useMailboxNavigateTo, useMessageAsRead, useMessageRemoval } from "../common/hooks/mailbox.hook";
// =====================================================

let navigateToPath: any;

let mailboxDispatch: Dispatch<any>;

let removeMessageDispatch: (messageID: string) => Dispatch<any>;

const handleRemovalOfSpecificMessage = (messageID: string) => {
	removeMessageDispatch(messageID);
	navigateToPath(PagePathEnum.INBOX_PANEL_VIEW);
}

const handleCloseMessageView = () => {
	// mailboxDispatch(fetchSpecificMessageThunk(messageID, categoryID));
	mailboxDispatch(clearMsgFromView(null));
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

	const messageActions = [
		{
			text: 'Close',
			muiType: MUI_WARNING_BUTTON,
			handleClick: () => { handleCloseMessageView() }
		},
		{
			text: 'Delete',
			muiType: MUI_ERROR_BUTTON,
			handleClick: () => { handleRemovalOfSpecificMessage(message.id) }
		}
	]

	return (
		<>
			{
				message?.message
					?
					<MessageViewComp info={{ ...message }}>
						<MessageActionsComp actions={messageActions} />
					</MessageViewComp>
					:	<></>
			}
		</>
	);
}
