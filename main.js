// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
// import { getFireStore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp = initializeApp  ({

  apiKey: "AIzaSyAsZMvBjivVPnEff1-hvkpgv6ubIVOErGk",
  authDomain: "fordswellness-77af3.firebaseapp.com",
  projectId: "fordswellness-77af3",
  storageBucket: "fordswellness-77af3.firebasestorage.app",
  messagingSenderId: "757264159793",
  appId: "1:757264159793:web:899734af389db35adf7110",
  measurementId: "G-LN5XMD3LXP"

})

const auth = getAuth(firebaseApp);
// const db = getFirestore(firebaseApp);

onAuthStateChanged(auth, user => {

  if (user != null) {
    console.log('logged in!');
  } else {
    console.log('No user');
  }

});

function attemptLogin() {
  
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  if (username == "test1@email.com" && password == "123456") {
    return true;
  } else {
    return false;
  }

}

function createActivities() {

    

}