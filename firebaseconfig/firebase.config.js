// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCb8qrl2f6XbEsyNahW53nWCHhlIFbDipc",
    authDomain: "corporate-website-template.firebaseapp.com",
    projectId: "corporate-website-template",
    storageBucket: "corporate-website-template.appspot.com",
    messagingSenderId: "1026221473972",
    appId: "1:1026221473972:web:ee32d1811d0dcf9693d7e1",
    measurementId: "G-SRD4PNQ52B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);