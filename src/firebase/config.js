import firebase from 'firebase/app';

// Services
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCHDOOm_oT0dZ5t-pxmf5J39PyMKa9zhRY",
  authDomain: "mymoney-82a22.firebaseapp.com",
  projectId: "mymoney-82a22",
  storageBucket: "mymoney-82a22.appspot.com",
  messagingSenderId: "1058650020897",
  appId: "1:1058650020897:web:ca0499c93caa974bf99760"
};

// Init Firebase
firebase.initializeApp(firebaseConfig);

// Init Firestore service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// Timestamp
const timestamp = firebase.firestore.Timestamp;

// Export
export { projectFirestore, projectAuth, timestamp };

// projectAuth sends a request to the Firebase to handle the authentication process.
// It checks if the details are correct and returns a token as a response. Then, we can use that token to access the database.
// And also check if the user is still logged in or not.