// =================================================================
import {
  ref,
  onValue,
  child, push, update
} from "firebase/database";
import { Box, Divider, Grid } from "@mui/material";
import { ButtonComp } from "../components/ButtonComp";
import { TextareaComp } from "../components/TextareaComp";
import { db as FIRE_DB, dbName as DB_NAME } from "../app.config";
import { RadioboxGroupComp } from "../components/RadioboxGroupComp";
import { MUIButtonCompInterface } from "../common/interfaces/component.interface";
// =================================================================

//TODO: if time implement rxfire
let comment = '';
let feeling = '';

const comments = ref(FIRE_DB, `${DB_NAME}/`);

const muiButtonProps: MUIButtonCompInterface = {
  size: 'small',
  color: 'info',
  variant: 'outlined',
}

// TODO: protect with debounce from too many events
//TODO: WIP
const handleTextareaChange = (text: string) => { comment = text };
const handleRadioGroupChange = (optionChosen: string) => { feeling = optionChosen };

onValue(comments, (snapshot) => {
  const data = snapshot.val();
  if (data) {
    for (let key in data) {
      console.log(`========== Comment ==========`);
      console.log(`Message: ${data[key].message}`);
      console.log(`Feeling: ${data[key].feeling}`);
      console.log(`========== ========== ========== \n\n`);

    }
  }
});

//POST
function postComment() {
  const postData = {
    feeling,
    message: comment,
  };
  const updates: any = {};
  const newPostKey = push(child(ref(FIRE_DB), DB_NAME)).key;

  updates[`/${DB_NAME}/` + newPostKey] = postData;

  return update(ref(FIRE_DB), updates);
}

export function FeedbackComp() {
  return (
    <Grid container spacing={2} style={{ textAlign: "center" }}>
      <Grid item xs={12}>
        <p> Tell Us About Your Experience </p>
        <Divider />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <RadioboxGroupComp
          handleChange={(e: any) => handleRadioGroupChange(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <TextareaComp
          placeholder="Would you like to tell us more?"
          handleChange={(e: any) => handleTextareaChange(e.target.value)}
        />
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Divider />
        <br />
        <ButtonComp
          text="Post Comment"
          mui={muiButtonProps}
          handleClick={() => { postComment() }} />
        <br />
        <small><i>open the terminal to read some of the user's comments :P</i></small>
        <br />
      </Grid>
    </Grid>
  );
}