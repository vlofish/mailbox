import { ButtonComp } from "../components/ButtonComp";

export function NavbarFeat() {
	return (
		<div>
			<p> Hi V. </p>
			<p> {`You have X unread messages out of Y`} </p>
			<ButtonComp text="View Messages" />
		</div>
	);
}
