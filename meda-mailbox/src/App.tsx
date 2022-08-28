// ======================================================================
import { 
  Route, Link,
  BrowserRouter, Routes, 
} from "react-router-dom";

import HomePage from "./app/pages/HomePage";
import InboxPage from "./app/pages/InboxPage";
import SplitViewPage from "./app/pages/SplitViewPage";
import SingleViewPage from "./app/pages/SingleViewPage";
// ======================================================================

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InboxPage />} />
        <Route path='/home' element={<HomePage />}>
          <Route path='splitview' element={<SplitViewPage />} />
          <Route path='singleview' element={<SingleViewPage />} />
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
