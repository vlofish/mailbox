import { ButtonComp } from "../components/ButtonComp";
import { MUIButtonCompInterface } from "../common/interfaces/component.interface";

const muiButtonProps: MUIButtonCompInterface = {
	size: 'large',
	color: 'primary',
	variant: 'contained',
}

export function NavbarFeat() {
	return (
		<div>
			<p> Hi V. </p>
			<p> {`You have X unread messages out of Y`} </p>
			<ButtonComp 
				text="View Messages"
				mui={ muiButtonProps }
				/>
		</div>
	);
}
