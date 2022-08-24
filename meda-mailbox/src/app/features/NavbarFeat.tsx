// =========================================================================
import { Dispatch } from "redux";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ButtonComp } from "../components/ButtonComp";
import { MailboxInterface } from "../common/interfaces/";
import { MUIButtonCompInterface } from "../common/interfaces/component.interface";
import { fetchAllMessagesThunk } from "../common/store/thunks/mailbox.thunk";
// =========================================================================

let total: number;
let unread: number;
let dispatch: Dispatch<any>;

const muiButtonProps: MUIButtonCompInterface = {
	size: 'large',
	color: 'primary',
	variant: 'contained',
}

export function NavbarFeat() {
	dispatch = useDispatch();
	total = useSelector((state: MailboxInterface) => state.total);
	unread = useSelector((state: MailboxInterface) => state.unread);

	useEffect(() => {
		dispatch(fetchAllMessagesThunk());
	}, [])

	return (
		<div>
			<p> Hi V. </p>
			<p> {`You have ${unread} unread messages out of ${total} messages.`} </p>
			<ButtonComp 
				text="View Messages"
				mui={ muiButtonProps }
				/>
		</div>
	);
}
