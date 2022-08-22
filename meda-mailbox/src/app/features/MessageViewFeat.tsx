// =====================================================
import { useSelector } from "react-redux";
import { ButtonComp } from "../components/ButtonComp";
import { MailboxInterface } from "../common/interfaces";
// =====================================================

export function MessageViewFeat() {
	const message = useSelector((state: MailboxInterface) => state.message);

	return (
		<div>
			<div>
				<div>From: {message.from}</div>
				<div>Subject: {message.subject}</div>
			</div>
			<p>
				{message.message}
			</p>
			<ButtonComp text="Close" />
			<ButtonComp text="Delete" />
			<ButtonComp text="Mark as Read" />
		</div>
	);
}