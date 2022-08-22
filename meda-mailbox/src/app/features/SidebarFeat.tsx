// ====================================================
import { useSelector } from "react-redux";
import { ButtonComp } from "../components/ButtonComp";
import { MailboxInterface } from "../common/interfaces";
// ====================================================

let messages: any[];

export function SidebarFeat() {
	messages = useSelector((state: MailboxInterface) => {
		return state.messages;
	});

	return (
		<div>
			{messages.map((message, index) => {
				return (
					<div key={index}>
						<hr />
						Subject: {message.subject}
						<br />
						Preview: {message.preview}
						<br />
						<ButtonComp text='Show' />
						<ButtonComp text='Delete' />
						<ButtonComp text='Mark as Read' />
						<hr />
					</div>
				);
			})}

		</div>
	);
}