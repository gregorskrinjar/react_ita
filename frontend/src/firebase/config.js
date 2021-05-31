import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBpoiJ30j3v_EE4pRvVjp2vnZuO0cnRtHk",
    authDomain: "fir-galerija-api.firebaseapp.com",
    projectId: "fir-galerija-api",
    storageBucket: "fir-galerija-api.appspot.com",
    messagingSenderId: "1066465993643",
    appId: "1:1066465993643:web:a01bf39219217159ae28ee",
    measurementId: "G-2RMNF5GVPH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

// Initialize Storage service
const projectStorage = firebase.storage();

// Initialize Firestore service
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };