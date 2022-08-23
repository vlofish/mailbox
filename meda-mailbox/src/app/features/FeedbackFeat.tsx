// =================================================================
import {
  ref,
  onValue,
  child, push, update
} from "firebase/database";
import { db as FIRE_DB, dbName as DB_NAME } from "../app.config";
import { ButtonComp } from "../components/ButtonComp";
import { TextareaComp } from "../components/TextareaComp";
import { CheckboxGroupComp } from "../components/CheckboxGroupComp";
// =================================================================

let comment = '';
const comments = ref(FIRE_DB, `${DB_NAME}/`);

onValue(comments, (snapshot) => {
  let counter = 1;
  const data = snapshot.val();
  if (data) {
    for (let key in data) {
      console.log(`========== Comment ${counter} ==========`);
      console.log(`Message: ${data[key].message}`);
      console.log(`Feeling: ${data[key].feeling}`);
      console.log(`========== ========== ========== \n\n`);
      counter++;
    }
  }
});

// TODO: protect with debounce from too many events
//TODO: WIP
const handleTextareaChange = (character: string) => {
  console.log(character);
  comment += character;
  console.log(comment);
}

//POST
function postComment() {
  const postData = {
    message: comment,
    feeling: "ok", // TBD
  };
  const updates: any = {};
  const newPostKey = push(child(ref(FIRE_DB), DB_NAME)).key;

  updates[`/${DB_NAME}/` + newPostKey] = postData;

  return update(ref(FIRE_DB), updates);
}

export function FeedbackFeat() {
  return (
    <div>
      <CheckboxGroupComp />
      <TextareaComp 
        title="Tell us why"
        handleChange={(e: any) => { handleTextareaChange(e.target.value) }}
        />
      <br />
      <br />
      <ButtonComp
        text="Post Comment"
        handleClick={() => { postComment() }} />
    </div>
  );
}