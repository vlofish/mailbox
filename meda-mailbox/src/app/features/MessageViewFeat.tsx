// =====================================================
import { Dispatch } from "redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ButtonComp } from "../components/ButtonComp";
import { MailboxInterface } from "../common/interfaces";
import { MUI_ERROR_BUTTON } from "../common/constants/button.constant";
import { useMessageAsRead, useMessageRemoval } from "../common/hooks/mailbox.hook";
// =====================================================


let removeMessageDispatch: (messageID: string) => Dispatch<any>;

const handleRemovalOfSpecificMessage = (messageID: string) => removeMessageDispatch(messageID);

export function MessageViewFeat() {
	[, removeMessageDispatch] = useMessageRemoval();
	const [, markMessageReadDispatch] = useMessageAsRead();
	const message = useSelector((state: MailboxInterface) => {
		return state.message;
	});

	/**
	 * Each message displayed will be marked as read.
	 */
	useEffect(() => {
		markMessageReadDispatch(message.id);
	}, [message]);

	return (
		<div>
			<div>
				<div>From: {message.from}</div>
				<div>Subject: {message.subject}</div>
			</div>
			<p>
				{message.message}
			</p>
			<ButtonComp
				text="Close"
				mui={MUI_ERROR_BUTTON}
			/>
			<ButtonComp
				text='Delete'
				mui={MUI_ERROR_BUTTON}
				handleClick={() => handleRemovalOfSpecificMessage(message.id)}
			/>
		</div>
	);
}