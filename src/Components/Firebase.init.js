// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDf7pP6xIMIEr45jGcOJ_Ut-4QD-ajTngw",
    authDomain: "ph-assignment-10-d8306.firebaseapp.com",
    projectId: "ph-assignment-10-d8306",
    storageBucket: "ph-assignment-10-d8306.appspot.com",
    messagingSenderId: "81338306529",
    appId: "1:81338306529:web:f45c8783118ecd56a8cca0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
