import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  onValue,
  child, push, update
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCyCenkclS_2VjoUCrlKNRJCkRiuGDpiNw",
  authDomain: "meda-mailbox.firebaseapp.com",
  projectId: "meda-mailbox",
  storageBucket: "meda-mailbox.appspot.com",
  messagingSenderId: "306578451479",
  appId: "1:306578451479:web:6c8d6844d597b467684052",
  measurementId: "G-M067RD9CLD",
  databaseURL: "https://meda-mailbox-default-rtdb.firebaseio.com",// Can I cypher this?
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// TODO: this will show all the previous comments people have left
const starCountRef = ref(db, 'feedback/');
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
  const newPostKey = push(child(ref(db), 'feedback')).key;

  updates['/feedback/' + newPostKey] = postData;

  return update(ref(db), updates);
}


function App() {
  return (
    <div className="App">
      <button onClick={() => { postComment() }}> 
        Write dummy comment
      </button>
    </div>
  );
}

export default App;
