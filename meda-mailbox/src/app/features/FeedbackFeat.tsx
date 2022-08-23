
import {
  ref,
  onValue,
  child, push, update
} from "firebase/database";
import { db as FIRE_DB } from "../app.config";

// TODO: this will show all the previous comments people have left
const starCountRef = ref(FIRE_DB, 'feedback/');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.table(data);
});

//POST
function postComment() {
  const postData = {
    message: "so so",
    feeling: "ok",
  };
  const updates: any = {};
  const newPostKey = push(child(ref(FIRE_DB), 'feedback')).key;

  updates['/feedback/' + newPostKey] = postData;

  return update(ref(FIRE_DB), updates);
}

export function FeedbackFeat() {
  return (
    <button onClick={() => { postComment() }}>
      Write dummy comment
    </button>
  );
}