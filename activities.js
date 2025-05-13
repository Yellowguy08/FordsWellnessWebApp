// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
// import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js"; 

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
// const auth = getAuth(app);

const db = getFirestore(app);



const querySnapshot = await getDocs(collection(db, "Activity"));

querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots

  let data = doc.data();

  createActivities(data.activityName, data.roomNumber, data.teachers)

  // console.log(data.activityName)

  // console.log(doc.id, " => ", doc.data());
});



function createActivities(name, room, teachers) {

    let activity_box = document.createElement("div");
    activity_box.classList.add("activity-box");

    let activity_info = document.createElement("div");
    activity_info.classList.add("activity-info");

    let activity_name = document.createElement("span");
    activity_name.classList.add("activity-name");
    activity_name.appendChild(document.createTextNode(name));
    
    let activity_room = document.createElement("span");
    activity_room.classList.add("activity-room");
    activity_room.appendChild(document.createTextNode(room));

    activity_info.appendChild(activity_name);
    activity_info.appendChild(activity_room);

    let teacher_box = document.createElement("div");
    teacher_box.classList.add("teacher-box");
    
    let activity_teacher = document.createElement("span");
    activity_teacher.classList.add("activity-teacher");

    let teacherStr = "";

    for (let i = 0; i < teachers.length; i++) {
      console.log(teachers[i]);
      teacherStr += teachers[i] += ", ";
    }

    teacherStr = teacherStr.substring(0, teacherStr.length-2);

    activity_teacher.appendChild(document.createTextNode(teacherStr));

    teacher_box.appendChild(activity_teacher);

    let max_capacity = document.createElement("div");
    max_capacity.classList.add("capacity-bar");
    max_capacity.classList.add("max-capacity");

    let curr_capacity = document.createElement("div");
    curr_capacity.classList.add("capacity-bar");
    curr_capacity.classList.add("curr-capacity");

    activity_box.appendChild(activity_info);
    activity_box.appendChild(teacher_box);
    activity_box.appendChild(max_capacity);
    activity_box.appendChild(curr_capacity);

    document.getElementById("body").appendChild(activity_box);
}