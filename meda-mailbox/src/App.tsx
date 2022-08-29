// ======================================================================
import { PagePathEnum } from "./app/common/enums";

import {
  Route, Link,
  BrowserRouter, Routes,
} from "react-router-dom";
import HomePage from "./app/pages/HomePage";
import InboxPage from "./app/pages/InboxPage";
import SplitViewPage from "./app/pages/SplitViewPage";
import PanelViewPage from "./app/pages/PanelViewPage";
import MessageViewPage from "./app/pages/MessageViewPage";
// ======================================================================

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path={`/${PagePathEnum.INBOX}`} element={<InboxPage />}>
          <Route path={`${PagePathEnum.SPLIT_VIEW}`} element={<SplitViewPage />} />
          <Route path={`${PagePathEnum.PANEL_VIEW}`} element={<PanelViewPage />} />
          <Route path={`${PagePathEnum.INBOX_MESSAGE_VIEW}`} element={<MessageViewPage />} />
        </Route>
        <Route
          path="*"
          element={
            <>
              <p>Guard pending to be implemented!</p>
              <Link to="/">
                <button> Go to Inbox </button>
              </Link>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
