import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5bYuCBYwrJsromwu7k2Q9V_RZai_NOAc",
  authDomain: "nolanai-fc917.firebaseapp.com",
  projectId: "nolanai-fc917",
  storageBucket: "nolanai-fc917.appspot.com",
  messagingSenderId: "935942834289",
  appId: "1:935942834289:web:620242840ba7586096b3d0",
  databaseURL: "https://nolanai-fc917-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
