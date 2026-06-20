import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDZhJgjN3ITHPuGRLJK7Qq16-yEsWXa-5A",
  authDomain: "moviezapp-d5690.firebaseapp.com",
  projectId: "moviezapp-d5690",
  storageBucket: "moviezapp-d5690.firebasestorage.app",
  messagingSenderId: "779558941411",
  appId: "1:779558941411:web:a260b64a216829492c8bd6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;