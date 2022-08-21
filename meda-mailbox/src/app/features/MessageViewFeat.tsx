import { ButtonComp } from "../components/ButtonComp";

export function MessageViewFeat() {
	return (
		<div>
			<div>
				<ButtonComp text="X" />
				<div>From: Classified</div>
				<div>Subject: X</div>
			</div>
			<p>
				The body of the msg goes here
			</p>
		</div>
	);
}