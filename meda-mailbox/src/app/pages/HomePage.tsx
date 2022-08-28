// =============================================================
import '../common/common.css';

import { Link } from 'react-router-dom';
import { ButtonComp } from '../components/ButtonComp';
import { PagePathEnum } from '../common/enums/page-paths.enum';
import { MessageCounterFeat } from '../features/MessageCounterFeat';
import { MUI_WARNING_BUTTON } from '../common/constants/button.constant';

import Box from "@mui/material/Box/Box";
import Grid from "@mui/material/Grid/Grid";
// =============================================================

const boxStyle = {
	width: '100wh',
	height: '100vh',
	backgroundColor: 'primary.main',
	'&:hover': {
		backgroundColor: 'primary.dark',
	},
}

function Inbox() {
	return (
		<Grid container spacing={2} className='text-align-center'>
			<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
				<Box className='full-vector-height-width' sx={boxStyle}>
					<MessageCounterFeat />
					<Link to={PagePathEnum.INBOX_SPLIT_VIEW}>
						<ButtonComp
							text="View Messages"
							mui={MUI_WARNING_BUTTON}
						/>
					</Link>
				</Box>
			</Grid>
		</Grid>
	)
}

export default function HomePage() {
	return <Inbox />
}