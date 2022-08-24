// =====================================================
import { Dispatch } from "redux";
import { useSelector } from "react-redux";
import { ButtonComp } from "../components/ButtonComp";
import { MailboxInterface } from "../common/interfaces";
import { useMessageRemoval } from "../common/hooks/mailbox.hook";
import { MUI_ERROR_BUTTON } from "../common/constants/button.constant";
// =====================================================


let removeMessageDispatch: (messageID: string) => Dispatch<any>;

const handleRemovalOfSpecificMessage = (messageID: string) => removeMessageDispatch(messageID);

export function MessageViewFeat() {
	[, removeMessageDispatch] = useMessageRemoval();
	const message = useSelector((state: MailboxInterface) => {
		return state.message;
	});

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
			<ButtonComp
				text="Mark as Read"
				mui={MUI_ERROR_BUTTON}
			/>
		</div>
	);
}