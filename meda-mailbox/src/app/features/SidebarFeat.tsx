// ===================================================================
import { Dispatch } from "redux";
import { ButtonComp } from "../components/ButtonComp";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { MailboxInterface, MUIButtonCompInterface } from "../common/interfaces";
import { fetchSpecificMessageThunk } from "../common/store/thunks/mailboxThunk";
import { SearchMailFeat } from "./SearchMailFeat";
// ===================================================================

let messages: any[];
let dispatch: Dispatch<any>;
const handleDisplayOfSpecificMessage = (categoryID: string) => dispatch(fetchSpecificMessageThunk(categoryID));

const muiButtonProps: MUIButtonCompInterface = {
	size: 'small',
	color: 'error',
	variant: 'outlined',
}

const rows: GridRowsProp = [
	{ id: 1, col1: 'Hello', col2: 'World' },
	{ id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
	{ id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
	{ field: 'col1', headerName: 'Column 1', width: 150 },
	{ field: 'col2', headerName: 'Column 2', width: 150 },
];

export function SidebarFeat() {
	dispatch = useDispatch();
	messages = useSelector((state: MailboxInterface) => state.messages);

	return (
		<div>
			<SearchMailFeat />
			
			{messages.map((message, index) => {
				return (
					<div key={index}>
						<hr />
						Subject: {message.subject}
						<br />
						Preview: {message.preview}
						<br />
						<ButtonComp 
							text='Show Message'
							mui={muiButtonProps}
							handleClick={() => handleDisplayOfSpecificMessage(message.subject)} />
						<ButtonComp
							text='Delete'
							mui={muiButtonProps} />
						<ButtonComp
							text='Mark as Read' 
							mui={muiButtonProps}/>
						<hr />
					</div>
				);
			})}

			<hr />

			{/* <div style={{ height: 300, width: '100%' }}>
				<DataGrid rows={rows} columns={columns} />
			</div> */}
		</div>
	);
}
