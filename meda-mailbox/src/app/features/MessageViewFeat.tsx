import { ButtonComp } from "../components/ButtonComp";
import { MUIButtonCompInterface } from "../common/interfaces/component.interface";

const muiButtonProps: MUIButtonCompInterface = {
	size: 'small',
	color: 'error',
	variant: 'outlined',
}

export function MessageViewFeat() {
	return (
		<div>
			<div>
				<ButtonComp 
					text="X"
					mui={ muiButtonProps }
					/>
				<div>From: Classified</div>
				<div>Subject: X</div>
			</div>
			<p>
				The body of the msg goes here
			</p>
		</div>
	);
}