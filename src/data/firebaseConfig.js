import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7HZ3krdNQi9LFzOJQ3K1FJDfejUxA9VE",
  authDomain: "farmaciaelcristo-3b008.firebaseapp.com",
  projectId: "farmaciaelcristo-3b008",
  storageBucket: "farmaciaelcristo-3b008.appspot.com",
  messagingSenderId: "828510295468",
  appId: "1:828510295468:web:bc866a5a4cdb1b1b821609"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;