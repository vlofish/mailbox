import { ButtonComp } from "../components/ButtonComp";

// TODO: instead of button maybe a debounce when typing the search box
export function SearchMailFeat() {
	return (
		<div>
			<input type='text'></input>
			<ButtonComp text="Search E-Mails" />
		</div>
	);
}