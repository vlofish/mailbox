// ===================================================================
import { Dispatch } from "redux";
import { useSelector } from "react-redux";
import { SearchMailFeat } from "./SearchMailFeat";
import { ButtonComp } from "../components/ButtonComp";
import { useMessageRemoval } from "../common/hooks/mailbox.hook";
// import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { fetchSpecificMessageThunk } from "../common/store/thunks/mailbox.thunk";
import { MailboxInterface, MailboxMessagesInterface, MUIButtonCompInterface } from "../common/interfaces";
// ===================================================================

let messages: any[];
let mailboxDispatch: Dispatch<any>;
let removeMessageDispatch: (messageID: string) => Dispatch<any>;

const handleRemovalOfSpecificMessage = (messageID: string) => removeMessageDispatch(messageID);
const handleDisplayOfSpecificMessage = (categoryID: string) => mailboxDispatch(fetchSpecificMessageThunk(categoryID));

const muiButtonProps: MUIButtonCompInterface = {
	size: 'small',
	color: 'error',
	variant: 'outlined',
}

// const rows: GridRowsProp = [
// 	{ id: 1, col1: 'Hello', col2: 'World' },
// 	{ id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
// 	{ id: 3, col1: 'MUI', col2: 'is Amazing' },
// ];

// const columns: GridColDef[] = [
// 	{ field: 'col1', headerName: 'Column 1', width: 150 },
// 	{ field: 'col2', headerName: 'Column 2', width: 150 },
// ];

export function SidebarFeat() {
	messages = useSelector((state: MailboxInterface) => state.messages);
	[mailboxDispatch, removeMessageDispatch] = useMessageRemoval();

	return (
		<div>
			<SearchMailFeat />
			
			{messages.map((message: MailboxMessagesInterface,index: number) => {
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
							handleClick={() => handleDisplayOfSpecificMessage(message.subject)}
							/>
						<ButtonComp
							text='Delete'
							mui={muiButtonProps} 
							handleClick={ () => handleRemovalOfSpecificMessage(message.id) }
							/>
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