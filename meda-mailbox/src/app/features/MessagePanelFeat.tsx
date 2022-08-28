// ===================================================================
import { Dispatch } from "redux";
import { useEffect } from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { ButtonComp } from "../components/ButtonComp";
import { PagePathEnum } from "../common/enums/page-paths.enum";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { fetchSpecificMessageThunk } from "../common/store/thunks/mailbox.thunk";
import { MailboxInterface, MailboxMessagesInterface } from "../common/interfaces";
import { useMailboxNavigateTo, useMessageAsRead, useMessageRemoval } from "../common/hooks/mailbox.hook";

import Box from '@mui/material/Box';
import { 
	MUI_SUCCESS_BUTTON,
	MUI_ERROR_BUTTON, MUI_SECONDARY_BUTTON, 
} from "../common/constants/button.constant";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// ===================================================================

let navigateToPath: any;
let messages: any[];
let clickedRow: any;
// let tableRows: MailboxMessagesInterface[] = [
let tableRows: GridRowsProp = [
	{ id: 'dummy1', subject: '', preview: '', read: false },
]; // TODO: should i overwrite `messages` by this prop?
let mailboxDispatch: Dispatch<any>;
let removeMessageDispatch: (messageID: string) => Dispatch<any>;
let markMessageReadDispatch: (messageID: string) => Dispatch<any>;


const tableColumns: GridColDef[] = [
	{ field: 'subject', headerName: 'Mission', width: 150 },
	{ field: 'preview', headerName: 'Preview', width: 250 },
];
const handleTableRowClick = (row: GridRowsProp) => {
	clickedRow = row
	// mailboxDispatch(clearMsgFromView(null));

	// if view is single activate the below
	// navigateToPath("/home/messageview", { replace: true });
};
const handleMarkMessageAsRead = (messageID: string) => markMessageReadDispatch(messageID);

/**
 * TODO: if there are shared feats of messages move it to utils
 * @param messageID 
 */
const handleRemovalOfSpecificMessage = (messageID: string) => {
	removeMessageDispatch(messageID);
}

const handleDisplayOfSpecificMessage = (messageID: string, categoryID: string) => {
	mailboxDispatch(fetchSpecificMessageThunk(messageID, categoryID));
	navigateToPath(PagePathEnum.INBOX_MESSAGE_VIEW)
}

const handleMessagesChange = (messages: any) => tableRows = messages.map((message: MailboxMessagesInterface, index: number) => ({ ...message, index }));


// TODO: send the single message obj; for now performance is impacted with big data sets
function MessageActionButtonsComp(props: { messages: any }) {
	const messageID = props.messages[clickedRow?.index]?.id;
	const isMessageRead = props.messages[clickedRow?.index]?.read;
	const messageSubject = props.messages[clickedRow?.index]?.subject;

	return (
		<Grid container spacing={2}>
			<Grid item xs={8}>
				<Box sx={{ p: 2, display: 'flex' }}>
					<ButtonComp
						text='Show Msg'
						mui={MUI_SUCCESS_BUTTON}
						handleClick={() => handleDisplayOfSpecificMessage(messageID, messageSubject)}
					/> &nbsp;
					<ButtonComp
						text='Delete'
						mui={MUI_ERROR_BUTTON}
						handleClick={() => handleRemovalOfSpecificMessage(messageID)}
					/> &nbsp;
					<ButtonComp
						text='Mark Read'
						mui={MUI_SECONDARY_BUTTON}
						handleClick={() => handleMarkMessageAsRead(messageID)}
					/>
				</Box>
			</Grid>
			<Grid item xs={4}>
				<Box sx={{ p: 2, display: 'flex' }}>
					<label> <strong> Read </strong> </label>
					<FiberManualRecordIcon
						fontSize="medium"
						sx={{
							color: isMessageRead ? '#4caf50' : '#d9182e',
						}}
					/>
				</Box>
			</Grid>
		</Grid>
	)
}

function MessagesPanel() {

	[, navigateToPath] = useMailboxNavigateTo();


	[, markMessageReadDispatch] = useMessageAsRead();

	[mailboxDispatch, removeMessageDispatch] = useMessageRemoval();

	useEffect(() => {
		handleMessagesChange(messages);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [messages]);


	messages = useSelector((state: MailboxInterface) => {
		return state.messages;
	});

	return (
		<Box sx={{ height: '50vh', width: '100%' }}>
			{
				tableRows.length > 0
					? <DataGrid
						rows={tableRows}
						columns={tableColumns}
						onCellClick={(e) => handleTableRowClick(e.row)}
						components={{
							Footer: MessageActionButtonsComp,
						}}
						componentsProps={{
							footer: { messages },
						}}
					/>
					: <label> Loading...  </label>
			}
		</Box>
	);
}

export function MessagePanelFeat() {
	return <MessagesPanel />;
}