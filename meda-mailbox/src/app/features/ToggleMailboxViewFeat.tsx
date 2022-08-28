// ======================================================================
import { ButtonComp } from "../components/ButtonComp";
import { MailboxViewEnum, PagePathEnum } from "../common/enums/";
import { MUI_SUCCESS_BUTTON } from "../common/constants/button.constant";
import { updateMailboxView } from "../common/store/slicers/mailbox.slice";
import { useMailboxDispatch, useMailboxNavigateTo } from "../common/hooks/mailbox.hook";
// ======================================================================

let navigateToPath: any;

let mailboxDispatch: any;

let currentView = MailboxViewEnum.SPLIT;

let currentPath = PagePathEnum.INBOX_SPLIT_VIEW;

/**
 * On button click the view of the mailbox is changed:
 * - Spilt view; displays messages and ,essage in the same view.
 * - Panel view; displays messages and message in separated views.
 * 
 * On button click the user is redirected to specific page path.
 */
const toggleMailboxView = () => {
  currentView = currentView === MailboxViewEnum.PANEL 
    ? MailboxViewEnum.SPLIT 
    : MailboxViewEnum.PANEL;

  currentPath = currentView === MailboxViewEnum.PANEL
    ? PagePathEnum.INBOX_PANEL_VIEW
    : PagePathEnum.INBOX_SPLIT_VIEW;

    navigateToPath(currentPath);
    mailboxDispatch(updateMailboxView(currentView));
}

export function ToggleMailboxViewFeat() {
  mailboxDispatch = useMailboxDispatch();
  
  [, navigateToPath] = useMailboxNavigateTo();
  
  return <ButtonComp
    text={currentView}
    mui={MUI_SUCCESS_BUTTON}
    handleClick={toggleMailboxView}
  />
}