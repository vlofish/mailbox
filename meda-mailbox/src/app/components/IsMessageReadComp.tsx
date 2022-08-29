// ===================================================================
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// ===================================================================

export const IsMessageReadComp = (props: { isRead: boolean }) => (
  <>
    <div style={{ flexGrow: 1, display: 'block' }}>
      {`${!props.isRead ? 'Unread' : 'Read'}`}
    </div>
    {
      props.isRead
        ? <VisibilityIcon
          fontSize="large"
          sx={{ color: '#4caf50' }} />
        :
        <VisibilityOffIcon
          fontSize="large"
          sx={{ color: '#d9182e' }} />
    }
  </>
)