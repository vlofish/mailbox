// =====================================================
import { useSelector } from "react-redux";
import { ButtonComp } from "../components/ButtonComp";
import { MailboxInterface } from "../common/interfaces";
import { MUIButtonCompInterface } from "../common/interfaces";
// =====================================================


const muiButtonProps: MUIButtonCompInterface = {
	size: 'small',
	color: 'error',
	variant: 'outlined',
}

export function MessageViewFeat() {
	const message = useSelector((state: MailboxInterface) => state.message);

	return (
		<div>
			<div>
				<ButtonComp 
					text="X"
					mui={ muiButtonProps }
					/>
				<div>From: {message.from}</div>
				<div>Subject: {message.subject}</div>
			</div>
			<p>
				{message.message}
			</p>
			<ButtonComp 
				text="Close"
				mui={ muiButtonProps }
			/>
			<ButtonComp
				text="Delete"
				mui={muiButtonProps}
			/>
			<ButtonComp
				text="Mark as Read"
				mui={muiButtonProps}
			/>
		</div>
	);
}