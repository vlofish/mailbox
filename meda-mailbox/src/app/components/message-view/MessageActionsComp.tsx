//=============================================================
import { ButtonComp } from "../ButtonComp";
import { ButtonCompInterface } from "../../common/interfaces";
import CardActions from "@mui/material/CardActions/CardActions";
//=============================================================

export function MessageActionsComp(props: { actions: ButtonCompInterface[] }) {
  return (
    <CardActions>
      {props.actions.map((action: any, index: number) => {
        return (
          <ButtonComp
            key={index}
            text={action.text}
            mui={action.mui}
            handleClick={action.handleClick}
            disabled={action.disabled}
          />
        )
      })}
    </CardActions>
  )
}