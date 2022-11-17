
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBNrvs4w5iPBGZ5hcydPMSQTwz6qttcgVw",
  authDomain: "devlinks-560b3.firebaseapp.com",
  projectId: "devlinks-560b3",
  storageBucket: "devlinks-560b3.appspot.com",
  messagingSenderId: "34982129244",
  appId: "1:34982129244:web:7f5263d8b349fe54d28099",
  measurementId: "G-6F8SXXCW25"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);

export {db, auth};
