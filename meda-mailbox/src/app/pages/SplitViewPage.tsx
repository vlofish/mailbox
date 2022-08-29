// ======================================================================
import PanelViewPage from "./PanelViewPage"
import MessageViewPage from "./MessageViewPage"
// ======================================================================

/**
 * This page/view displays the whole messages and the view of each one of 'em in a single view.
 */
export default function SplitViewPage() {
  return (
    <>
      <PanelViewPage />
      <MessageViewPage />
    </>
  )
}