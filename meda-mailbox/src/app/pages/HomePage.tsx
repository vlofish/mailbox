// =============================================================
import '../common/common.css';

import { PagePathEnum } from '../common/enums/';
import { ButtonComp } from '../components/ButtonComp';
import { MessageCounterFeat } from '../features/MessageCounterFeat';
import { useMailboxNavigateTo } from '../common/hooks/mailbox.hook';
import { MUI_WARNING_BUTTON } from '../common/constants/button.constant';

import Box from "@mui/material/Box/Box";
import Grid from "@mui/material/Grid/Grid";
// =============================================================

let navigateToPath: any;

const boxStyle = {
	width: '100wh',
	height: '50vh',
	backgroundColor: 'primary.main',
}

const handleButtonClick = () => navigateToPath(PagePathEnum.INBOX_SPLIT_VIEW);

// TODO: fix layout using mui
const Home = () => (
	<Grid container className='text-align-center'>
		<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
			<Box className='full-vector-height-width' sx={boxStyle} />
		</Grid>
		<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
			<Box className='full-vector-height-width' sx={boxStyle}>
				<ButtonComp
					text="View Messages"
					mui={MUI_WARNING_BUTTON}
					handleClick={handleButtonClick}
				/>
				<MessageCounterFeat />
			</Box>
		</Grid>
	</Grid>
)

export default function HomePage() {
	[, navigateToPath] = useMailboxNavigateTo();
	return <Home />
}