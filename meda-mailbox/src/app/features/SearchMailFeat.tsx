// THIS FEAT ISN'T IMPLEMENTED. :(
import { ButtonComp } from "../components/ButtonComp";
import { MUIButtonCompInterface } from "../common/interfaces/component.interface";

const muiButtonProps: MUIButtonCompInterface = {
	size: 'small',
	color: 'info',
	variant: 'outlined',
}

// TODO: debounce when typing the search box
export function SearchMailFeat() {
	return (
		<div>
			<input type='text'></input>
			<ButtonComp 
				text="Search E-Mails"
				mui={ muiButtonProps }
				/>
		</div>
	);
}