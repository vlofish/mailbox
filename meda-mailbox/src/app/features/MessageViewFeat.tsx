// =====================================================
import { Dispatch } from "redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { MailboxInterface } from "../common/interfaces";
import { MessageViewComp } from "../components/message-view/MessageViewComp";
import { MessageActionsComp } from "../components/message-view/MessageActionsComp";
import { useMessageAsRead, useMessageRemoval } from "../common/hooks/mailbox.hook";
import { MUI_ERROR_BUTTON, MUI_WARNING_BUTTON } from "../common/constants/button.constant";
// =====================================================


let removeMessageDispatch: (messageID: string) => Dispatch<any>;

const handleRemovalOfSpecificMessage = (messageID: string) => removeMessageDispatch(messageID);

export function MessageViewFeat() {
	[, removeMessageDispatch] = useMessageRemoval();

	const [, markMessageReadDispatch] = useMessageAsRead();

	const message = useSelector((state: MailboxInterface) => state.message);

	/**
	 * Each message displayed will be marked as read.
	 */
	useEffect(() => {
		markMessageReadDispatch(message.id);
	}, [message]);

	const messageActions = [
		{
			text: 'Close',
			muiType: MUI_WARNING_BUTTON,
			handleClick: () => { window.alert('Unimplemented') }
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