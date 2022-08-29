// ===================================================================
import { Dispatch } from "redux";
import { useEffect } from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { ButtonComp } from "../components/ButtonComp";
import { MailboxViewEnum, PagePathEnum } from "../common/enums/";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { fetchSpecificMessageThunk } from "../common/store/thunks/mailbox.thunk";
import { MailboxInterface, MailboxMessagesInterface, MailboxViewType } from "../common/interfaces";
import { useMailboxNavigateTo, useMessageAsRead, useMessageRemoval } from "../common/hooks/mailbox.hook";

import Box from '@mui/material/Box';
import {
	MUI_SUCCESS_BUTTON,
	MUI_ERROR_BUTTON, MUI_SECONDARY_BUTTON,
} from "../common/constants/button.constant";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// ===================================================================

let clickedRow: any;

let navigateToPath: any;

let tableRows: GridRowsProp = [{ id: '', subject: '', preview: '', read: false }]; 

let mailboxDispatch: Dispatch<any>;

let removeMessageDispatch: (messageID: string) => Dispatch<any>;

let markMessageReadDispatch: (messageID: string) => Dispatch<any>;

const tableColumns: GridColDef[] = [
	{ field: 'read', headerName: 'Is Read', width: 100 },
	{ field: 'subject', headerName: 'Subject', width: 150 },
	{ field: 'preview', headerName: 'Preview', width: 300 },
];

/**
 * TODO: if there are shared feats of messages move it to utils
 * @param messageID 
 */
const handleRemovalOfSpecificMessage = (messageID: string) => {
	removeMessageDispatch(messageID);
}

// TODO: WIP
const handleDisplayOfSpecificMessage = (messageID: string, categoryID: string) => {
	mailboxDispatch(fetchSpecificMessageThunk(messageID, categoryID));
}

const handleMarkMessageAsRead = (messageID: string) => markMessageReadDispatch(messageID);

/**
 * There are two scenarios:
 * - `split` displays the message in the same view.
 * - `panel` calls the message to display and then moves on the message view.
 * @param row 
 */
const handleTableRowClick = (row: MailboxMessagesInterface, currentView: MailboxViewType) => {
	switch(currentView) {
		case MailboxViewEnum.SPLIT:
			clickedRow = row
			break;
		
		case MailboxViewEnum.PANEL:
			mailboxDispatch(fetchSpecificMessageThunk(row.id, row.subject, navigateToPath, PagePathEnum.INBOX_MESSAGE_VIEW));
			break;

	}
};

// TODO: WIP
const handleMessagesChange = (messages: any) => tableRows = messages.map((message: MailboxMessagesInterface, index: number) => ({ ...message, index }));

const IsMessageReadComp = (props: { isRead: boolean }) => (
	<>
		<label> <strong> Read </strong> </label>
		<FiberManualRecordIcon
			fontSize="medium"
			sx={{
				color: props.isRead ? '#4caf50' : '#d9182e',
			}}
		/>
	</>

)

// TODO: style this comp, this is just a placeholder for now
const NoActionsButtonsComp = (isMessageRead: boolean) => (
	// <IsMessageReadComp isRead={isMessageRead} />
	<></>
)

const ActionButtonsComp = (props: { messageID: string, messageSubject: string }) => (
	<>
		<ButtonComp
			text='Show Msg'
			mui={MUI_SUCCESS_BUTTON}
			handleClick={() => handleDisplayOfSpecificMessage(props.messageID, props.messageSubject)}
		/> &nbsp;
		<ButtonComp
			text='Delete'
			mui={MUI_ERROR_BUTTON}
			handleClick={() => handleRemovalOfSpecificMessage(props.messageID)}
		/> &nbsp;
		<ButtonComp
			text='Mark Read'
			mui={MUI_SECONDARY_BUTTON}
			handleClick={() => handleMarkMessageAsRead(props.messageID)}
		/>
	</>
)

// TODO: get a single message obj; for now performance is impacted because of the array with big data sets.
function PanelFooterComp(props: { messages: MailboxMessagesInterface[] }) {
	const messageID = props.messages[clickedRow?.index]?.id;
	const isMessageRead = props.messages[clickedRow?.index]?.read;
	const messageSubject = props.messages[clickedRow?.index]?.subject;

	return (
		<Grid container spacing={2}>
			<Grid item xs={8}>
				<Box sx={{ p: 2, display: 'flex' }}>
					<ActionButtonsComp
						messageID={messageID}
						messageSubject={messageSubject} />
				</Box>
			</Grid>
			<Grid item xs={4}>
				<Box sx={{ p: 2, display: 'flex' }}>
					<IsMessageReadComp isRead={isMessageRead} />
				</Box>
			</Grid>
		</Grid>
	)
}

function MessagePanel() {

	[, navigateToPath] = useMailboxNavigateTo();

	[, markMessageReadDispatch] = useMessageAsRead();

	[mailboxDispatch, removeMessageDispatch] = useMessageRemoval();

	const [messages, currentView]: any[] = useSelector((state: MailboxInterface) => [state.messages, state.currentView]);
	useEffect(() => {
		handleMessagesChange(messages);
	}, [messages]);


	return (
		<Box sx={{ height: '40vh', width: '100%' }}>
			{
				tableRows.length > 0
					? <DataGrid
						rows={tableRows}
						columns={tableColumns}
						onRowClick={(e) => handleTableRowClick(e.row, currentView)}
						components={{
							Footer: currentView === MailboxViewEnum.SPLIT
								? PanelFooterComp
								: NoActionsButtonsComp
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
	return <MessagePanel />;
}