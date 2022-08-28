// ======================================================================
import { PagePathEnum } from "./app/common/enums/page-paths.enum";

import { 
  Route, Link,
  BrowserRouter, Routes, 
} from "react-router-dom";
import HomePage from "./app/pages/HomePage";
import InboxPage from "./app/pages/InboxPage";
import SplitViewPage from "./app/pages/SplitViewPage";
import SingleViewPage from "./app/pages/SingleViewPage";
import MessageViewPage from "./app/pages/MessageViewPage";
// ======================================================================

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 
        // TODO: switch inbox and home; home displays the `view message` button.
        // TODO: inbox displays the messages
        */}
        <Route path='/' element={<InboxPage />} />
        <Route path={`/${PagePathEnum.INBOX}`} element={<HomePage />}>
          <Route path={`${PagePathEnum.SPLIT_VIEW}`} element={<SplitViewPage />} />
          <Route path={`${PagePathEnum.PANEL_VIEW}`} element={<SingleViewPage />} />
          <Route path={`${PagePathEnum.INBOX_MESSAGE_VIEW}`} element={<MessageViewPage />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
              <Link to="/">
                <button> Go to Inbox </button>
              </Link>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
