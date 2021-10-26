import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const app = firebase.initializeApp(
     {
  apiKey: "AIzaSyD_AD7naKgQmyj7cnwx8Z7xU4mORCS3REA",
  authDomain: "ledmebe-d2f9f.firebaseapp.com",
  projectId: "ledmebe-d2f9f",
  storageBucket: "ledmebe-d2f9f.appspot.com",
  messagingSenderId: "772127648473",
  appId: "1:772127648473:web:41d89207dfa2f07977acc8",
  measurementId: "G-FS571ZSSXX"
}
);


export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
}

