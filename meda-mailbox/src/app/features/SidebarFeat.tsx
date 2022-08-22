// ====================================================
import { Dispatch } from "redux";
import { ButtonComp } from "../components/ButtonComp";
import { useDispatch, useSelector } from "react-redux";
import { MailboxInterface } from "../common/interfaces";
import { fetchSpecificMessageThunk } from "../common/store/thunks/mailboxThunk";
// ====================================================

let messages: any[];
let dispatch: Dispatch<any>;

const handleDisplayOfSpecificMessage = (categoryID: string) => dispatch(fetchSpecificMessageThunk(categoryID));

export function SidebarFeat() {
	dispatch = useDispatch();
	messages = useSelector((state: MailboxInterface) => state.messages);

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
						<ButtonComp text='Show Message' handleClick={() => handleDisplayOfSpecificMessage(message.subject)} />
						<ButtonComp text='Delete' />
						<ButtonComp text='Mark as Read' />
						<hr />
					</div>
				);
			})}

		</div>
	);
}