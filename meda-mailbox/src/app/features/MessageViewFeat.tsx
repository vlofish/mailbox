// =====================================================
import { Dispatch } from "redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { MailboxViewEnum, PagePathEnum } from "../common/enums/";
import { IsMessageReadComp } from "../components/IsMessageReadComp";
import { clearMsgFromView } from "../common/store/slicers/mailbox.slice";
import { MessageViewComp } from "../components/message-view/MessageViewComp";
import { removeSpecificMessageThunk } from "../common/store/thunks/mailbox.thunk";
import { MessageActionsComp } from "../components/message-view/MessageActionsComp";
import { MUI_ERROR_BUTTON, MUI_WARNING_BUTTON } from "../common/constants/button.constant";
import { ButtonCompInterface, MailboxInterface, MailboxViewType } from "../common/interfaces";
import { useMailboxNavigateTo, useMessageAsRead, useMessageRemoval } from "../common/hooks/mailbox.hook";
// =====================================================

let navigateToPath: any;

let currentView: MailboxViewType;

let mailboxDispatch: Dispatch<any>;

const handleCloseMessageView = () => {
	mailboxDispatch(clearMsgFromView(null));

	if (currentView === MailboxViewEnum.PANEL) {
		navigateToPath(PagePathEnum.INBOX_PANEL_VIEW);
	}
}

const handleRemovalOfSpecificMessage = (messageID: string) => {
	switch (currentView) {
		case MailboxViewEnum.SPLIT:
			mailboxDispatch(removeSpecificMessageThunk(messageID));
			break;

		case MailboxViewEnum.PANEL:
			mailboxDispatch(removeSpecificMessageThunk(messageID, navigateToPath, PagePathEnum.INBOX_PANEL_VIEW));
			break;
	}
}

export function MessageViewFeat() {
	[, navigateToPath] = useMailboxNavigateTo();

	[mailboxDispatch] = useMessageRemoval();

	currentView = useSelector((state: MailboxInterface) => state.currentView)
	
	const [, markMessageReadDispatch] = useMessageAsRead();
	
	const message = useSelector((state: MailboxInterface) => state.message)

	const messageActions: ButtonCompInterface[] = [
		{
			text: 'Close',
			disabled: false,
			mui: MUI_WARNING_BUTTON,
			handleClick: () => { handleCloseMessageView() }
		},
		{
			text: 'Delete',
			disabled: false,
			mui: MUI_ERROR_BUTTON,
			handleClick: () => { handleRemovalOfSpecificMessage(message.id) },
		}
	]

	/**
	 * Each message displayed will be marked as read.
	 */
	useEffect(() => {
		markMessageReadDispatch(message.id);
	}, [message, markMessageReadDispatch]);

	return (
		<>
			{
				message?.message
					?
					<>
						<MessageViewComp info={{ ...message }}>
							<MessageActionsComp actions={messageActions} />
							<IsMessageReadComp isRead={true} />
						</MessageViewComp>
					</>
					: <></>
			}
		</>
	);
}
