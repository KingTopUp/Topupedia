import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const userInfo = document.getElementById('user-info');

loginBtn.onclick = () => {
  signInWithPopup(auth, provider).catch(console.error);
};

logoutBtn.onclick = () => {
  signOut(auth);
};

onAuthStateChanged(auth, user => {
  if (user) {
    userInfo.innerText = `Hai, ${user.displayName}`;
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'inline-block';
  } else {
    userInfo.innerText = '';
    loginBtn.style.display = 'inline-block';
    logoutBtn.style.display = 'none';
  }
});