// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js"; 

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

const db = getFirestore(app);

// Login Handler
// ------------------------------------------------------------------------

const loginButton = document.getElementById("login");

if (loginButton) {
  loginButton.addEventListener("click", function (event) {
    event.preventDefault()

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      window.location.href = "activities.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });
  })
}

// Sign-up Handler
// ------------------------------------------------------------------------

async function sendUserData(email, id) {
  const name = document.getElementById("name");
  const homeroom = document.getElementById("homeroom");

  await setDoc(doc(db, "UserInfo", id), {
    name: name.value,
    id: id,
    role: "student",
    year: getYear(homeroom.value),
    homeroom: homeroom.value,
    created: new Date(),
    email: email
  });

  window.location.href = "activities.html";

}

const signUpButton = document.getElementById("sign-up");

if (signUpButton) {
  signUpButton.addEventListener("click", function (levent) {
    levent.preventDefault()

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      sendUserData(email, user.uid);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
  })
}

// Other Helper Functions
// ------------------------------------------------------------------------

function getYear(homeroom) {

  let yearDiff = new Date().getFullYear() - parseInt(homeroom.substring(0, homeroom.length));


  switch(yearDiff) {

    case 0:
      console.log("Senior");
      return "12";

    case -1:
      console.log("Junoir");
      return "11";

    case -2:
      console.log("Softmore");
      return "10";
      
    case -3:
      console.log("Freshman");
      return "9";
    default:
      console.log("Freshman - Default");
      return "9";

  }

}

function generateRPassword() {

  let passwordPlaceholder = document.getElementById("password");
  
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < 20; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  console.log("rPassword: " + result);

  passwordPlaceholder.setAttribute("placeholder", result);

}

generateRPassword();

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