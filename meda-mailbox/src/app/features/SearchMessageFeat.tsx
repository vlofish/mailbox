// THIS FEAT ISN'T IMPLEMENTED. :(
// =============================================================
import { ButtonComp } from "../components/ButtonComp";
import { MUI_SUCCESS_BUTTON } from "../common/constants/button.constant";
// =============================================================

const SearchMessage = () => (
	<div>
		<input type='text'></input>
		<ButtonComp
			text="Search E-Mails"
			mui={MUI_SUCCESS_BUTTON}
		/>
	</div>
)

// TODO: debounce when typing the search box
export function SearchMessageFeat() {
	return <SearchMessage />
}