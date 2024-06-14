// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp8ru6NDM0bcCeZ1sBt9KGxII-gZzagGo",
  authDomain: "interi-e1600.firebaseapp.com",
  projectId: "interi-e1600",
  storageBucket: "interi-e1600.appspot.com",
  messagingSenderId: "1028723438547",
  appId: "1:1028723438547:web:fb3d095bc02dc1fbcab526"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)