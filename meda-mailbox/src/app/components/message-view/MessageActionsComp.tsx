//=============================================================
import { ButtonComp } from "../ButtonComp";
import CardActions from "@mui/material/CardActions/CardActions";
//=============================================================

export function MessageActionsComp(props: any) {
  return (
    <CardActions>
      {props.actions.map((action: any, index: number) => {
        return (
          <ButtonComp
            key={index}
            text={action.text}
            mui={action.muiType}
            handleClick={action.handleClick}
          />
        )
      })}
    </CardActions>
  )
}