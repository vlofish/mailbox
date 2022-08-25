import Button from '@mui/material/Button';
import { ButtonCompInterface } from "../common/interfaces/";


export function ButtonComp(props: ButtonCompInterface) {
  return (
    <Button
      onClick={ props.handleClick }
      size = { props.mui.size } 
      color = { props.mui.color }
      variant = { props.mui.variant }
      >
      { props.text }
    </Button>
  );
}