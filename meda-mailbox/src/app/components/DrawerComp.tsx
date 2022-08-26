// =======================================================
import {
  useState,
  Fragment, KeyboardEvent, MouseEvent
} from 'react';
import Drawer from '@mui/material/Drawer';
import { Fab } from '@mui/material';
// =======================================================

type Anchor = 'bottom';

const anchor = 'bottom';

const initialState: { bottom: boolean } = { bottom: false };

export default function DrawerComp(props: any) {

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

  return (
    <div>
      <Fragment key={anchor}>
        <Fab variant="extended" onClick={toggleDrawer(anchor, true)}>
          <label>
            Your feedback is Important to Us.
          </label>
        </Fab>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {props.children}
        </Drawer>
      </Fragment>
    </div>
  );
}
