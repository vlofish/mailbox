// =======================================================
import { 
  useState,
  Fragment, KeyboardEvent, MouseEvent 
} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
// =======================================================

type Anchor = 'bottom';

const anchor = 'bottom';

const initialState: { bottom: boolean } = { bottom: false}; 

export default function FeedbackFeat() {
  const [state, setState] = useState(initialState);

  const toggleDrawer =
    (anchor: Anchor = 'bottom', open: boolean) =>
      (event: KeyboardEvent | MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as KeyboardEvent).key === 'Tab' ||
            (event as KeyboardEvent).key === 'Shift')
        ) return;

        setState({ ...state, [anchor]: open });
      };

  const list = () => (
    <Box
      // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
    >
      <div> <p> Tell us about your experience </p> </div>
      <Divider />
      <div>
        <label> feddback placeholder </label>
        <textarea></textarea>
      </div>
    </Box>
  );

  return (
    <div>
      <Fragment key={anchor}>
        <Button onClick={toggleDrawer(anchor, true)}>
          Feedback
        </Button>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list()}
        </Drawer>
      </Fragment>
    </div>
  );
}
