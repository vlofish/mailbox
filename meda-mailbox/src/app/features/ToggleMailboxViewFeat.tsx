import { MUI_SUCCESS_BUTTON } from "../common/constants/button.constant";
import { PagePathEnum } from "../common/enums/page-paths.enum";
import { useMailboxNavigateTo } from "../common/hooks/mailbox.hook";
import { ButtonComp } from "../components/ButtonComp";

let navigateToPath: any;

let currentView = 'Split'

let currentPath = PagePathEnum.INBOX_SPLIT_VIEW;

/**
 * On button click the view of the mailbox is changed:
 * - Spilt view; displays messages and ,essage in the same view.
 * - Panel view; displays messages and message in separated views.
 * 
 * On button click the user is redirected to specific page path.
 */
const toggleMailboxView = () => {
  currentView = currentView === 'Panel' ? 'Split' : 'Panel';
  currentPath = currentView === 'Panel'
    ? PagePathEnum.INBOX_PANEL_VIEW
    : PagePathEnum.INBOX_SPLIT_VIEW;

  navigateToPath(currentPath);
}

export function ToggleMailboxViewFeat() {
  [, navigateToPath] = useMailboxNavigateTo();
  
  return <ButtonComp
    text={currentView}
    mui={MUI_SUCCESS_BUTTON}
    handleClick={toggleMailboxView}
  />
}