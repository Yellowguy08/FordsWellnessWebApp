// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
// import { getFireStore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAsZMvBjivVPnEff1-hvkpgv6ubIVOErGk",
  authDomain: "fordswellness-77af3.firebaseapp.com",
  projectId: "fordswellness-77af3",
  storageBucket: "fordswellness-77af3.firebasestorage.app",
  messagingSenderId: "757264159793",
  appId: "1:757264159793:web:899734af389db35adf7110",
  measurementId: "G-LN5XMD3LXP"

}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

const button = document.getElementById("login");
button.addEventListener("click", function (event) {
  event.preventDefault()

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
})

// function createActivities() {

//     let activity_box = document.createElement("div");
//     activity_box.classList.add("activity-box");

//     let activity_info = document.createElement("div");
//     activity_info.classList.add("activity-info");

//     let activity_name = document.createElement("span");
//     activity_name.appendChild(document.createTextNode("Nap Time"))
    
//     let activity_room = document.createElement("span");
//     activity_room.appendChild(document.createTextNode("128"))

//     activity_info.appendChild(activity_name);
//     activity_info.appendChild(activity_room);

//     let teacher_box = document.createElement("div");
    
//     let activity_teacher = document.createElement("span");
//     activity_teacher.classList.add("activity-teacher");
//     activity_teacher.appendChild(document.createTextNode("Mr."));

//     teacher_box.appendChild(activity_teacher);

//     let max_capacity = document.createElement("div");
//     max_capacity.classList.add("capacity-bar");
//     max_capacity.classList.add("max-capacity");

//     let curr_capacity = document.createElement("div");
//     curr_capacity.classList.add("capacity-bar");
//     curr_capacity.classList.add("curr-capacity");

//     activity_box.appendChild(activity_info);
//     activity_box.appendChild(teacher_box);
//     activity_box.appendChild(max_capacity);
//     activity_box.appendChild(curr_capacity);

//     document.getElementById("body").appendChild(activity_box);
// }