// =======================================================
import {
  useState,
  Fragment, KeyboardEvent, MouseEvent
} from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
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
        <Button onClick={toggleDrawer(anchor, true)}>
          Feedback
        </Button>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          >
          { props.children }
        </Drawer>
      </Fragment>
    </div>
  );
}
