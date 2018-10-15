import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyC3DSkUlxgWloEvD0iyWYBBqzdWA5GM6ik",
    authDomain: "passholderplans.firebaseapp.com",
    databaseURL: "https://passholderplans.firebaseio.com",
    projectId: "passholderplans",
    storageBucket: "passholderplans.appspot.com",
    messagingSenderId: "22242998006"
};
firebase.initializeApp(config);

export default firebase;