import Button from '@mui/material/Button';
import { ButtonCompInterface } from "../common/interfaces/component.interface";


export function ButtonComp(props: ButtonCompInterface) {
  return (
    <Button
      color = { props.mui.color }
      variant = { props.mui.variant }
      size = { props.mui.size } >
      { props.text }
    </Button>
  );
}