import firebase from 'firebase/app';
// import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
// import firebase from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBzL6PWba4IrS-vag-OZn2G3mIeyCeTNXU",
    authDomain: "cs5200-fall2019-finalproject.firebaseapp.com",
    databaseURL: "https://cs5200-fall2019-finalproject.firebaseio.com",
    projectId: "cs5200-fall2019-finalproject",
    storageBucket: "cs5200-fall2019-finalproject.appspot.com",
    messagingSenderId: "474863064100",
    appId: "1:474863064100:web:a66c136ec3aa66ada8b4b1",
    measurementId: "G-562381Q3F8"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const storage=firebase.storage();
export {
    storage,firebase as default
}