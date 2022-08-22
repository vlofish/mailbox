import { useSelector } from "react-redux";
import { ButtonComp } from "../components/ButtonComp";
import { MailboxInterface } from "../common/interfaces/";

let total: number;
let unread: number;

export function NavbarFeat() {
	total = useSelector((state: MailboxInterface) => state.total);
	unread = useSelector((state: MailboxInterface) => state.unread);

	return (
		<div>
			<p> Hi V. </p>
			<p> {`You have ${ unread } unread messages out of ${ total } messages.`} </p>
			<ButtonComp text="View Messages" />
		</div>
	);
}
