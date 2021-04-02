import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyB5BdTJ6CtCOi2WZj_GY-EMZFpMioYScdg",
    authDomain: "timebourse-5aee9.firebaseapp.com",
    projectId: "timebourse-5aee9",
    storageBucket: "timebourse-5aee9.appspot.com",
    messagingSenderId: "929799759085",
    appId: "1:929799759085:web:643897f6399ab2ed0698e4",
    measurementId: "G-8VP7GSPV1G"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-analytics.js"></script>

{/* <script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB5BdTJ6CtCOi2WZj_GY-EMZFpMioYScdg",
    authDomain: "timebourse-5aee9.firebaseapp.com",
    projectId: "timebourse-5aee9",
    storageBucket: "timebourse-5aee9.appspot.com",
    messagingSenderId: "929799759085",
    appId: "1:929799759085:web:643897f6399ab2ed0698e4",
    measurementId: "G-8VP7GSPV1G"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script> */}