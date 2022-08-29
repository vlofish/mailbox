// ===================================================================
import { Dispatch } from "redux";
import { useEffect } from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { MailboxViewEnum, PagePathEnum } from "../common/enums/";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { fetchSpecificMessageThunk } from "../common/store/thunks/mailbox.thunk";
import { ButtonCompInterface, MailboxInterface, MailboxMessagesInterface, MailboxViewType } from "../common/interfaces";
import { useMailboxNavigateTo, useMessageAsRead, useMessageRemoval } from "../common/hooks/mailbox.hook";

import Box from '@mui/material/Box';
import {
	MUI_SUCCESS_BUTTON,
	MUI_ERROR_BUTTON, MUI_SECONDARY_BUTTON,
} from "../common/constants/button.constant";
import { IsMessageReadComp } from "../components/IsMessageReadComp";
import { MessageActionsComp } from "../components/message-view/MessageActionsComp";
// ===================================================================

let clickedRow: any; // Reference for the values from the clicked row within the table

let navigateToPath: any;

let isPerformingAction = false; // Reference val for knowing whether the user is reading, deleting or marking as read.

let mailboxDispatch: Dispatch<any>;

let removeMessageDispatch: (messageID: string) => Dispatch<any>;

let markMessageReadDispatch: (messageID: string) => Dispatch<any>;

let tableRows: GridRowsProp = [{ id: '', subject: '', preview: '', read: null }];

const tableColumns: GridColDef[] = [
	{ field: 'read', headerName: 'Is Read', width: 100 },
	{ field: 'subject', headerName: 'Subject', width: 150 },
	{ field: 'preview', headerName: 'Preview', width: 500 },
];

/**
 * Marks the selected message as read based on its ID
 */
const handleMarkMessageAsRead = (messageID: string) => markMessageReadDispatch(messageID);

/**
 * Removes the message based on the ID.
 */
const handleRemovalOfSpecificMessage = (messageID: string) => removeMessageDispatch(messageID);

/**
 * Displays a specific message in a different component based on the message and category ID
 */
const handleDisplayOfSpecificMessage = (messageID: string, categoryID: string) => mailboxDispatch(fetchSpecificMessageThunk(messageID, categoryID));

/**
 * There are two scenarios to support:
 * - `split` displays the message in the same view.
 * - `panel` calls the message to display and then moves to the message view.
 */
const handleTableRowClick = (row: MailboxMessagesInterface, currentView: MailboxViewType) => {
	setIsPerformingAction(true);
	switch (currentView) {
		case MailboxViewEnum.SPLIT:
			clickedRow = row
			break;

		case MailboxViewEnum.PANEL:
			mailboxDispatch(fetchSpecificMessageThunk(row.id, row.subject, navigateToPath, PagePathEnum.INBOX_MESSAGE_VIEW));
			break;
	}
};

/**
 * Helper for the `useEffect` hook.
 * Updates the `tableRows` from the table based on the `messages` gotten from the store.
 */
const handleMessagesChange = (messages: any) => tableRows = messages.map((message: MailboxMessagesInterface, index: number) => ({ ...message, index }));

const setIsPerformingAction = (performingAction: boolean) => isPerformingAction = performingAction;

// TODO: style this comp, this is just a placeholder for now
const NoActionsButtonsComp = () => (
	<div> <label> Messages Panel [style pending]</label></div>
)

/**
 * Action buttons displayed at the bottom of the messages table in the `split` view.
 * These go inside of the Footer of the table. 
 */
const ActionButtonsComp = (props: { messageID: string, messageSubject: string }) => {
	const disableButtons = (!isPerformingAction || Boolean(!props.messageID));
	const messageActions: ButtonCompInterface[] = [
		{
			text: 'Read',
			disabled: disableButtons,
			mui: MUI_SUCCESS_BUTTON,
			handleClick: () => { handleDisplayOfSpecificMessage(props.messageID, props.messageSubject) }
		},
		{
			text: 'Delete',
			disabled: disableButtons,
			mui: MUI_ERROR_BUTTON,
			handleClick: () => { handleRemovalOfSpecificMessage(props.messageID) }
		},
		{
			text: 'Mark Read',
			disabled: disableButtons,
			mui: MUI_SECONDARY_BUTTON,
			handleClick: () => { handleMarkMessageAsRead(props.messageID) }
		},
	];
	return <MessageActionsComp actions={messageActions} />
}

/**
 * Panel footer displayed only when the view is the `split` one.
 */
// TODO: get a single message obj; for now performance is impacted when big data sets.
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
	[, navigateToPath] = useMailboxNavigateTo(); // Used in the `panel` view

	[, markMessageReadDispatch] = useMessageAsRead();

	[mailboxDispatch, removeMessageDispatch] = useMessageRemoval();

	const [messages, currentView]: any[] = useSelector((state: MailboxInterface) => {
		setIsPerformingAction(false);
		return [state.messages, state.currentView];
	});

	useEffect(() => {
		handleMessagesChange(messages);
	}, [messages]);

	return (
		<Box sx={{ height: '60vh', width: '100%' }}>
			{
				tableRows.length > 0
					? <DataGrid
						density="comfortable"
						rows={tableRows}
						columns={tableColumns}
						onRowClick={(e) => handleTableRowClick(e.row, currentView) }
						components={{
							Footer: currentView === MailboxViewEnum.SPLIT
								? PanelFooterComp
								: NoActionsButtonsComp
						}}
						componentsProps={{
							footer: { messages },
						}}
					/>
					: <label> Loading...</label>
			}
		</Box>
	);
}

export function MessagePanelFeat() {
	return <MessagePanel />;
}